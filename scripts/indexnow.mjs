import { readFile } from "node:fs/promises";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const EXPECTED_HOST = "www.wxpenergy.com.my";
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;
const REQUEST_TIMEOUT_MS = 15_000;

function fail(message) {
  throw new Error(message);
}

function validateCanonicalUrl(value, host) {
  let url;

  try {
    url = new URL(value);
  } catch {
    fail(`Malformed URL: ${value}`);
  }

  if (
    url.protocol !== "https:" ||
    url.host !== host ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.href !== value
  ) {
    fail(`URL is not an exact canonical production URL: ${value}`);
  }

  return url.href;
}

async function loadConfig() {
  const configUrl = new URL("../indexnow.config.json", import.meta.url);
  const config = JSON.parse(await readFile(configUrl, "utf8"));

  if (config.host !== EXPECTED_HOST) {
    fail(`IndexNow host must be ${EXPECTED_HOST}.`);
  }

  if (!KEY_PATTERN.test(config.key)) {
    fail("IndexNow key must contain 8-128 letters, numbers, or hyphens.");
  }

  if (!Array.isArray(config.urlList) || config.urlList.length === 0) {
    fail("IndexNow urlList must contain at least one canonical URL.");
  }

  const urlList = config.urlList.map((url) =>
    validateCanonicalUrl(url, config.host),
  );

  if (new Set(urlList).size !== urlList.length) {
    fail("IndexNow urlList contains duplicate URLs.");
  }

  return { ...config, urlList };
}

function selectUrls(argumentsList, config) {
  let dryRun = false;
  const requested = [];

  for (const argument of argumentsList) {
    if (argument === "--") {
      continue;
    }

    if (argument === "--dry-run") {
      dryRun = true;
      continue;
    }

    if (argument.startsWith("-")) {
      fail(`Unknown option: ${argument}`);
    }

    const value = argument.startsWith("/")
      ? new URL(argument, `https://${config.host}`).href
      : argument;
    requested.push(validateCanonicalUrl(value, config.host));
  }

  if (new Set(requested).size !== requested.length) {
    fail("Requested URL list contains duplicates.");
  }

  const allowedUrls = new Set(config.urlList);
  for (const url of requested) {
    if (!allowedUrls.has(url)) {
      fail(`URL is not in the configured canonical allowlist: ${url}`);
    }
  }

  return {
    dryRun,
    urlList: requested.length > 0 ? requested : config.urlList,
  };
}

async function submitIndexNow(payload) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (response.status !== 200 && response.status !== 202) {
      const details = (await response.text()).trim().slice(0, 500);
      fail(
        `IndexNow returned HTTP ${response.status}${details ? `: ${details}` : "."}`,
      );
    }

    const statusMessage =
      response.status === 200
        ? "accepted"
        : "accepted; key validation may still be pending";
    console.log(
      `[IndexNow] ${payload.urlList.length} URL(s) ${statusMessage} (HTTP ${response.status}).`,
    );
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const config = await loadConfig();
  const { dryRun, urlList } = selectUrls(process.argv.slice(2), config);
  const payload = {
    host: config.host,
    key: config.key,
    keyLocation: `https://${config.host}/${config.key}.txt`,
    urlList,
  };

  if (dryRun) {
    console.log("[IndexNow] Dry run; no request was sent.");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  await submitIndexNow(payload);
}

main().catch((error) => {
  const message =
    error instanceof Error && error.name === "AbortError"
      ? `Request timed out after ${REQUEST_TIMEOUT_MS / 1000} seconds.`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error(`[IndexNow] Submission failed: ${message}`);
  process.exitCode = 1;
});
