import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/lib/site";

/** Server-only: true once the resume PDF has been added to /public. */
export function resumeIsAvailable(): boolean {
  return existsSync(path.join(process.cwd(), "public", site.resumeFile));
}
