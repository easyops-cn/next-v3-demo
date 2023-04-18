import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.join(__dirname, "../dist");

const packagesDir = path.join(__dirname, "../packages");
const packages = (await readdir(packagesDir, {
  withFileTypes: true
})).filter(dir => dir.isDirectory()).map(dir => dir.name);

if (existsSync(distDir)) {
  await rm(distDir, { recursive: true, force: true });
}

await mkdir(distDir);

for (const pkg of packages) {
  const srcDistDir = path.join(packagesDir, `${pkg}/dist`);
  const tgtDir = path.join(distDir, pkg);
  await mkdir(tgtDir);
  await cp(
    srcDistDir,
    tgtDir,
    {
      recursive: true
    }
  );
}

await writeFile(
  path.join(distDir, ".nojekyll"),
  ""
);
