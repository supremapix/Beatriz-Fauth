import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

await build({ entryPoints: ['entry-server.tsx'], outfile: 'dist-ssr/render.cjs', bundle: true, platform: 'node', format: 'cjs', jsx: 'automatic', logLevel: 'warning' });
{
  const { render, allRoutes, getSeo, headMarkup, SITE_URL } = (await import('../dist-ssr/render.cjs')).default;
  const template = await readFile('dist/index.html', 'utf8');
  for (const route of [...allRoutes, '/404']) {
    const file = route === '/404' ? 'dist/404.html' : path.join('dist', route, 'index.html');
    await mkdir(path.dirname(file), { recursive: true });
    const html = template.replace('<!--seo-head-->', () => headMarkup(route)).replace('<!--app-html-->', () => render(route));
    await writeFile(file, html);
  }
  const indexed = allRoutes.filter(route => !getSeo(route).noindex);
  await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + indexed.map(route => `<url><loc>${getSeo(route).url}</loc></url>`).join('\n') + '\n</urlset>\n');
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log(`Generated ${allRoutes.length} HTML pages, a 404 page and ${indexed.length} sitemap entries.`);
}
