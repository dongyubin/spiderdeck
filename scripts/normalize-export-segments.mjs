import { readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

// Next's static export joins segment paths with the OS separator, so on
// Windows page payloads land in "__next.<route>/__PAGE__.txt" instead of
// the "__next.<route>.__PAGE__.txt" file the client router requests.
const outDir = path.resolve("out");

async function flatten(sourceDir, destDir, prefix) {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const source = path.join(sourceDir, entry.name);
    const name = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      await flatten(source, destDir, name);
    } else {
      await rename(source, path.join(destDir, name));
    }
  }
  await rm(sourceDir, { recursive: true, force: true });
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }
    const entryPath = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      await flatten(entryPath, dir, entry.name);
    } else {
      await walk(entryPath);
    }
  }
}

await walk(outDir);
