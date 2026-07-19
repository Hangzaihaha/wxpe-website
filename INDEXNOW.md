# IndexNow

IndexNow notifies Bing and other participating search engines when a canonical production URL has meaningfully changed. It is a discovery signal: a successful submission does not guarantee crawling, indexing, or ranking.

## Production configuration

- Host: `www.wxpenergy.com.my`
- Verification URL: `https://www.wxpenergy.com.my/610bc0e0bfe3707ab77ee133223a0fc69f734bc1636089f39043dc8c48795493.txt`
- Canonical URL allowlist: `indexnow.config.json`
- Submission endpoint: `https://api.indexnow.org/indexnow`

The verification route returns only the public protocol key. It does not expose environment variables or deployment credentials.

## Submit updated URLs

Run IndexNow only after the relevant website update has been deployed and the verification URL is publicly available.

Submit all configured canonical URLs:

```bash
pnpm indexnow
```

Submit only specific changed URLs from the allowlist:

```bash
pnpm indexnow -- /projects /contact
```

Validate and inspect the payload without sending it:

```bash
pnpm indexnow -- --dry-run
```

Do not repeatedly submit unchanged URLs. If the IndexNow key is rotated, update `indexnow.config.json` and rename the matching verification-route directory under `app/` before deploying.

Protocol reference: [IndexNow documentation](https://www.indexnow.org/documentation)
