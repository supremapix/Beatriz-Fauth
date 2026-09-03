import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const { allRoutes, getSeo } = (await import('../dist-ssr/render.cjs')).default;
const htmlFor = route => route === '/404' ? 'dist/404.html' : path.join('dist', route, 'index.html');
const pages = new Map(await Promise.all([...allRoutes, '/404'].map(async route => [route, await readFile(htmlFor(route), 'utf8')])));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const [route, html] of pages) {
  const seo = getSeo(route);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one H1`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${route}: one canonical`);
  assert.ok(html.includes(`href="${seo.url}"`), `${route}: canonical URL`);
  assert.ok(!/psiquiatr|Paciente anônimo/i.test(html), `${route}: misleading claims removed`);
  assert.ok(!html.includes('<!--app-html-->'), `${route}: prerender completed`);
  const schema = JSON.parse(html.match(/id="site-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema['@graph'].filter(n => n['@type'] === 'ProfessionalService').length, 1);
  if (route !== '/404') assert.equal(sitemap.includes(`<loc>${seo.url}</loc>`), !seo.noindex, `${route}: sitemap indexing policy`);
  for (const [, href] of html.matchAll(/href="(\/[^" ]*)"/g)) {
    const [target, hash] = href.split('#');
    if (target.startsWith('/assets/') || target.startsWith('/images/')) { await access('dist' + target); continue; }
    assert.ok(pages.has(target || route), `${route}: target ${href} exists`);
    if (hash) assert.ok(pages.get(target || route).includes(`id="${hash}"`), `${route}: anchor ${href} exists`);
  }
  for (const [, src] of html.matchAll(/src="(\/images\/[^" ]+)"/g)) await access('dist' + src);
  const faq = schema['@graph'].find(n => n['@type'] === 'FAQPage');
  if (faq) for (const q of faq.mainEntity) assert.ok(html.includes(q.acceptedAnswer.text), `${route}: FAQ answer exists in HTML`);
}
assert.ok(getSeo('/blog/inexistente').noindex);
assert.ok(getSeo('/bairro/inexistente').noindex);
console.log(`SEO checks passed: ${pages.size} pages, local links and anchors, images, schema, FAQ and sitemap.`);
