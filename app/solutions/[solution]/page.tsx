import { notFound, redirect } from "next/navigation";
import { solutions } from "@/lib/site-data";

export default async function SolutionRedirect({
  params
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution } = await params;
  if (!solutions.some((item) => item.id === solution)) notFound();
  // Next.js preserves the incoming fragment; do not append a second one here.
  redirect("/solutions");
}
