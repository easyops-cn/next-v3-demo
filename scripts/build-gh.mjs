import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.join(__dirname, "../dist");

const srcBricksOnlyDistDir = path.join(__dirname, "../packages/bricks-only/dist");
const srcRenderOnlyDistDir = path.join(__dirname, "../packages/render-only/dist");
const tgtBricksOnlyDir = path.join(distDir, "bricks-only");
const tgtRenderOnlyDir = path.join(distDir, "render-only");

if (existsSync(distDir)) {
  await rm(distDir, { recursive: true, force: true });
}

await mkdir(distDir);
await mkdir(tgtBricksOnlyDir);
await mkdir(tgtRenderOnlyDir);

await cp(
  srcBricksOnlyDistDir,
  tgtBricksOnlyDir,
  {
    recursive: true
  }
);

await cp(
  srcRenderOnlyDistDir,
  tgtRenderOnlyDir,
  {
    recursive: true
  }
);

await writeFile(
  path.join(distDir, ".nojekyll"),
  ""
);
