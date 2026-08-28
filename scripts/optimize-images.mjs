import { access, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "images");
const files = (await readdir(inputDir)).filter((file) => file.endsWith(".png"));

for (const file of files) {
  const input = path.join(inputDir, file);
  const output = path.join(inputDir, file.replace(/\.png$/i, ".webp"));
  const isLogo = file.includes("logo");

  await sharp(input)
    .resize({
      width: isLogo ? 560 : 1680,
      withoutEnlargement: true,
    })
    .webp({ quality: isLogo ? 88 : 82, effort: 6 })
    .toFile(output);

  await access(output);
  console.log(`${file} -> ${path.basename(output)}`);
}
