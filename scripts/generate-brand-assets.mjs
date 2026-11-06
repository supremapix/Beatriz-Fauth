import { Resvg } from "@resvg/resvg-js";
import { readFile, writeFile } from "node:fs/promises";
const icon = await readFile("public/favicon.svg");
for (const [name, width] of [
  ["favicon-96x96.png", 96],
  ["apple-touch-icon.png", 180],
  ["web-app-manifest-192x192.png", 192],
  ["web-app-manifest-512x512.png", 512],
  ["favicon-32x32.png", 32],
  ["favicon-16x16.png", 16],
  ["mstile-150x150.png", 150],
]) {
  await writeFile(
    "public/" + name,
    new Resvg(icon, { fitTo: { mode: "width", value: width } })
      .render()
      .asPng(),
  );
}
await writeFile(
  "public/images/og-beatriz.png",
  new Resvg(await readFile("public/images/og-beatriz.svg"), {
    font: { loadSystemFonts: true, defaultFontFamily: "DejaVu Sans" },
  })
    .render()
    .asPng(),
);
// ICO can embed PNG images directly, preserving the vector-derived versions.
const sizes = [16, 32, 48, 64, 128, 256];
const images = sizes.map((value) =>
  new Resvg(icon, { fitTo: { mode: "width", value } }).render().asPng(),
);
const head = Buffer.alloc(6 + 16 * sizes.length);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(sizes.length, 4);
let offset = head.length;
sizes.forEach((size, i) => {
  const o = 6 + i * 16;
  head[o] = size === 256 ? 0 : size;
  head[o + 1] = head[o];
  head.writeUInt16LE(1, o + 4);
  head.writeUInt16LE(32, o + 6);
  head.writeUInt32LE(images[i].length, o + 8);
  head.writeUInt32LE(offset, o + 12);
  offset += images[i].length;
});
await writeFile("public/favicon.ico", Buffer.concat([head, ...images]));
