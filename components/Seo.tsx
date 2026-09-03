import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo } from '../seo';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const s = getSeo(pathname);
    document.title = s.title;
    const meta = (key: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    meta('description', s.description);
    meta('robots', s.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large');
    for (const [key, value] of Object.entries({ title: s.title, description: s.description, url: s.url, image: s.image, type: s.type, locale: 'pt_BR', site_name: 'Beatriz Fauth' })) meta('og:' + key, value, true);
    for (const [key, value] of Object.entries({ card: 'summary_large_image', title: s.title, description: s.description, image: s.image })) meta('twitter:' + key, value);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', s.url);
    let schema = document.getElementById('site-schema');
    if (!schema) { schema = document.createElement('script'); schema.id = 'site-schema'; schema.setAttribute('type', 'application/ld+json'); document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(s.schema);
  }, [pathname]);
  return null;
}
