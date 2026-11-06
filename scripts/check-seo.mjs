import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
const { allRoutes, getSeo, SHARE_TEXTS } = (
  await import("../dist-ssr/render.cjs")
).default;
const htmlFor = (route) =>
  route === "/404" ? "dist/404.html" : path.join("dist", route, "index.html");
const pages = new Map(
  await Promise.all(
    [...allRoutes, "/404"].map(async (route) => [
      route,
      await readFile(htmlFor(route), "utf8"),
    ]),
  ),
);
const sitemap = await readFile("dist/sitemap.xml", "utf8");
for (const [route, html] of pages) {
  const seo = getSeo(route);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one H1`);
  assert.equal(
    (html.match(/rel="canonical"/g) || []).length,
    1,
    `${route}: one canonical`,
  );
  assert.ok(html.includes(`href="${seo.url}"`), `${route}: canonical URL`);
  assert.ok(
    !/psiquiatr|Paciente anônimo/i.test(html),
    `${route}: misleading claims removed`,
  );
  assert.ok(!html.includes("<!--app-html-->"), `${route}: prerender completed`);
  const schema = JSON.parse(
    html.match(
      /id="site-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/,
    )[1],
  );
  assert.equal(
    schema["@graph"].filter((n) => n["@type"] === "ProfessionalService").length,
    1,
  );
  if (route !== "/404")
    assert.equal(
      sitemap.includes(`<loc>${seo.url}</loc>`),
      !seo.noindex,
      `${route}: sitemap indexing policy`,
    );
  for (const [, href] of html.matchAll(/href="(\/[^" ]*)"/g)) {
    const [target, hash] = href.split("#");
    if (/\.[a-z0-9]+$/i.test(target)) {
      await access("dist" + target);
      continue;
    }
    assert.ok(pages.has(target || route), `${route}: target ${href} exists`);
    if (hash)
      assert.ok(
        pages.get(target || route).includes(`id="${hash}"`),
        `${route}: anchor ${href} exists`,
      );
  }
  for (const [, hash] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(
      html.includes(`id="${hash}"`),
      `${route}: local anchor #${hash} exists`,
    );
  for (const [, src] of html.matchAll(/src="(\/images\/[^" ]+)"/g))
    await access("dist" + src);
  const faq = schema["@graph"].find((n) => n["@type"] === "FAQPage");
  if (faq)
    for (const q of faq.mainEntity)
      assert.ok(
        html.includes(q.acceptedAnswer.text),
        `${route}: FAQ answer exists in HTML`,
      );
}
assert.ok(getSeo("/blog/inexistente").noindex);
assert.ok(getSeo("/bairro/inexistente").noindex);
console.log(
  `SEO checks passed: ${pages.size} pages, local links and anchors, images, schema, FAQ and sitemap.`,
);
// Package Suprema and privacy safeguards are verified against the emitted site.
const titles = allRoutes.map((route) => getSeo(route).title);
assert.equal(new Set(titles).size, titles.length, "Unique page titles");
for (const [route, html] of pages) {
  assert.ok(
    html.includes("https://supremasite.com.br"),
    `${route}: Suprema credit`,
  );
  assert.ok(
    html.includes("CRP 12/00649"),
    `${route}: professional identification`,
  );
  assert.ok(
    !/12\/24937|R\$\s*150|cdn\.tailwindcss\.com|Privacidade absoluta|Total sigilo|transformando vidas|processo de cura/i.test(
      html,
    ),
    `${route}: misleading or legacy content absent`,
  );
  assert.ok(
    html.includes('og:image:width" content="1200'),
    `${route}: social dimensions`,
  );
  assert.ok(
    html.includes("/images/og-beatriz.png"),
    `${route}: branded preview`,
  );
  assert.ok(html.includes('href="/favicon.svg"'), `${route}: SVG favicon`);
  assert.ok(
    html.includes('href="/site.webmanifest"'),
    `${route}: web manifest`,
  );
}
const manifest = JSON.parse(await readFile("dist/site.webmanifest", "utf8"));
for (const icon of manifest.icons) await access("dist" + icon.src);
const shares = await readFile("components/FloatingActions.tsx", "utf8");
assert.equal(SHARE_TEXTS.length, 15, "15 share messages");
assert.equal(new Set(SHARE_TEXTS).size, 15, "15 unique share messages");
assert.ok(shares.includes("15000"), "15 second rotation");
assert.ok(shares.includes("scrollY > 300"), "Back-to-top threshold");
for (const name of [
  "WhatsApp",
  "Facebook",
  "X",
  "Pinterest",
  "LinkedIn",
  "Threads",
])
  assert.ok(shares.includes(`"${name}"`), `Share destination ${name}`);
assert.ok(!shares.includes("setTimeout("), "No abandoned share timeouts");
const form = await readFile("components/ContactForm.tsx", "utf8");
assert.ok(
  !/fetch\(|localStorage|sessionStorage|type="email"|type="tel"/.test(form),
  "No unnecessary personal-data collection or storage",
);
const privacy = pages.get("/privacidade");
assert.ok(privacy.includes("banco de dados"));
console.log(
  "Suprema checks passed: 15 rotating texts, 6 share services, credit on every page, icons, OG, contact privacy and professional identification.",
);

// Larger-text revision: every route exposes one contextual, accessible contact section.
for (const [route, html] of pages) {
  assert.equal(
    (html.match(/class="page-contact"/g) || []).length,
    1,
    `${route}: one contextual contact section`,
  );
  assert.ok(
    html.includes("/images/beatriz-contato.svg"),
    `${route}: contact identity graphic`,
  );
  assert.ok(
    html.includes('width="250" height="250"'),
    `${route}: square 250px contact graphic`,
  );
  assert.ok(
    html.includes('class="page-contact-phone" href="tel:+5547999858983"'),
    `${route}: contact phone in HTML`,
  );
  assert.ok(
    html.indexOf('class="footer-contact"') <
      html.indexOf('class="footer-navigation"'),
    `${route}: logical footer order`,
  );
}
const serviceManifest = JSON.parse(
  await readFile("SERVICOS_ARTES_V2_MANIFEST.json", "utf8"),
);
assert.equal(serviceManifest.assets.length, 5, "Five service illustrations");
const servicesHtml = pages.get("/servicos");
for (const asset of serviceManifest.assets) {
  await access(asset.webp);
  assert.ok(
    servicesHtml.includes(asset.webp.replace("public", "")),
    `${asset.key}: new service illustration`,
  );
}
assert.equal(
  (
    servicesHtml.match(
      /Imagem ilustrativa\. Não retrata pacientes ou o consultório reais\./g,
    ) || []
  ).length,
  5,
  "Illustration disclosure for all services",
);
const square = await readFile("public/images/beatriz-contato.svg", "utf8");
assert.ok(
  square.includes("(47) 99985-8983") &&
    square.includes('width="250" height="250"'),
);
const rgb = (hex) =>
  hex
    .match(/[a-f0-9]{2}/gi)
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
const luminance = (hex) =>
  rgb(hex).reduce((n, v, i) => n + v * [0.2126, 0.7152, 0.0722][i], 0);
const contrast = (a, b) => {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
for (const [label, fg, bg, min] of [
  ["body text", "#344b45", "#fbf9f4", 7],
  ["footer text", "#344b45", "#d6e3d7", 7],
  ["hover link", "#785322", "#fbf9f4", 4.5],
  ["service number", "#52624c", "#fffdf8", 4.5],
  ["button text", "#ffffff", "#245b56", 4.5],
  ["field border", "#71816c", "#ffffff", 3],
])
  assert.ok(
    contrast(fg, bg) >= min,
    `${label}: contrast ${contrast(fg, bg).toFixed(2)}`,
  );
console.log(
  "Readability checks passed: contextual contact on all routes, five service illustrations, footer order and key color contrasts.",
);

await assert.rejects(
  access("dist/qa-accessibility.html"),
  "Local QA harness must not ship",
);

for (const [route, html] of pages) {
  assert.ok(
    html.includes('class="footer-grid"><div class="footer-contact"'),
    `${route}: contact first in footer`,
  );
}
const home = pages.get("/");
assert.ok(
  home.indexOf("hero-phone") < home.indexOf("hero-visual"),
  "Home phone before portrait",
);
assert.ok(
  home.indexOf("hero-essential") < home.indexOf("hero-visual"),
  "Home address before portrait",
);
for (const [name, fg, bg] of [
  ["italic on sage", "#245b56", "#dce5d4"],
  ["section label", "#245b56", "#dfe9df"],
  ["section body", "#344b45", "#dfe9df"],
  ["white on dark strip", "#ffffff", "#163f3d"],
])
  assert.ok(
    contrast(fg, bg) >= 4.5,
    `${name}: contrast ${contrast(fg, bg).toFixed(2)}`,
  );
console.log(
  "Senior hierarchy checks passed: phone/address near start, contact-first footer, contrasting section text.",
);
