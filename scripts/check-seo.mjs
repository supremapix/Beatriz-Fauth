import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
const { allRoutes, getSeo, SHARE_TEXTS } = (await import("../dist-ssr/render.cjs")).default;
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
