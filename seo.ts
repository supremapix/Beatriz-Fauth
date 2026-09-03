import { BLOG_POSTS, CONTACT_INFO, FAQS, NEIGHBORHOODS_DATA } from './constants';

export const SITE_URL = 'https://www.beatrizfauthpsicologa.com.br';
const pages: Record<string, { title: string; description: string }> = {
  '/': { title: 'Psicóloga em Balneário Camboriú | Beatriz Fauth', description: 'Beatriz Fauth, psicóloga e psicanalista em Balneário Camboriú. Atendimento no Centro e online. CRP 12/00649. Consulte horários pelo WhatsApp.' },
  '/sobre': { title: 'Sobre Beatriz Fauth | Psicóloga e psicanalista em BC', description: 'Conheça Beatriz Fauth, psicóloga e psicanalista, CRP 12/00649. Saiba mais sobre sua trajetória e abordagem em Balneário Camboriú.' },
  '/servicos': { title: 'Psicanálise e terapia de casal em BC | Beatriz Fauth', description: 'Conheça as modalidades de atendimento de Beatriz Fauth: psicanálise individual, terapia de casal e familiar, jovens e atendimento online.' },
  '/contato': { title: 'Contato e endereço em Balneário Camboriú | Beatriz Fauth', description: 'Solicite atendimento com Beatriz Fauth pelo WhatsApp (47) 99985-8983. Rua 1021, 254, sala 3, Centro, Balneário Camboriú. Confirme seu horário.' },
  '/blog': { title: 'Dúvidas sobre consultas e terapia | Beatriz Fauth', description: 'Orientações sobre primeira consulta, terapia de casal e atendimento online em Balneário Camboriú e região. Tire dúvidas antes de agendar.' },
  '/regiao': { title: 'Psicóloga em Balneário Camboriú e região | Beatriz Fauth', description: 'Mora em Balneário Camboriú, Camboriú, Itajaí ou Itapema? Veja o endereço no Centro de BC e consulte as opções presencial e online com Beatriz Fauth.' }
};

export function getSeo(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const post = BLOG_POSTS.find(p => path === `/blog/${p.slug}`);
  const neighborhood = NEIGHBORHOODS_DATA.find(n => path === `/bairro/${n.slug}`);
  const page = pages[path] || (post && { title: `${post.title} | Beatriz Fauth`, description: post.excerpt }) || neighborhood;
  const title = page?.title || 'Página não encontrada | Beatriz Fauth';
  const description = page?.description || 'A página solicitada não foi encontrada. Consulte os serviços e o contato de Beatriz Fauth.';
  const url = SITE_URL + (path === '/' ? '/' : path);
  // Retain useful legacy neighborhood URLs without indexing near-duplicate landing pages.
  const noindex = !page || Boolean(neighborhood && neighborhood.slug !== 'centro');
  const image = SITE_URL + (post?.image || '/images/beatriz-profile.jpg');
  const provider = {
    '@type': 'ProfessionalService', '@id': SITE_URL + '/#consultorio', name: 'Beatriz Fauth — Psicologia e Psicanálise',
    url: SITE_URL + '/', telephone: '+' + CONTACT_INFO.phoneRaw, email: CONTACT_INFO.email,
    image: SITE_URL + '/images/beatriz-profile.jpg',
    address: { '@type': 'PostalAddress', streetAddress: 'Rua 1021, 254, sala 3, Centro', addressLocality: 'Balneário Camboriú', addressRegion: 'SC', addressCountry: 'BR' },
    sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.facebook]
  };
  const graph: object[] = [provider,
    { '@type': 'Person', '@id': SITE_URL + '/#beatriz', name: 'Beatriz Fauth', jobTitle: 'Psicóloga e psicanalista', identifier: CONTACT_INFO.crp, worksFor: { '@id': provider['@id'] } },
    { '@type': 'WebSite', '@id': SITE_URL + '/#website', url: SITE_URL + '/', name: 'Beatriz Fauth', inLanguage: 'pt-BR', publisher: { '@id': provider['@id'] } },
    { '@type': 'WebPage', '@id': url + '#webpage', url, name: title, description, inLanguage: 'pt-BR', isPartOf: { '@id': SITE_URL + '/#website' }, about: { '@id': provider['@id'] } }
  ];
  if (path === '/' || path === '/blog') graph.push({ '@type': 'FAQPage', '@id': url + '#duvidas', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) });
  if (post) graph.push({ '@type': 'BlogPosting', headline: post.title, description: post.excerpt, image, mainEntityOfPage: { '@id': url + '#webpage' }, publisher: { '@id': provider['@id'] }, inLanguage: 'pt-BR' });
  return { title, description, url, image, noindex, type: post ? 'article' : 'website', schema: { '@context': 'https://schema.org', '@graph': graph } };
}

export const allRoutes = [...Object.keys(pages), ...BLOG_POSTS.map(p => `/blog/${p.slug}`), ...NEIGHBORHOODS_DATA.map(n => `/bairro/${n.slug}`)];
export function headMarkup(path: string) {
  const s = getSeo(path);
  const escape = (v: string) => v.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  return `<title>${escape(s.title)}</title>
<meta name="description" content="${escape(s.description)}" />
<meta name="robots" content="${s.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}" />
<link rel="canonical" href="${escape(s.url)}" />
<meta property="og:type" content="${s.type}" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="Beatriz Fauth" />
<meta property="og:title" content="${escape(s.title)}" />
<meta property="og:description" content="${escape(s.description)}" />
<meta property="og:url" content="${escape(s.url)}" />
<meta property="og:image" content="${escape(s.image)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(s.title)}" />
<meta name="twitter:description" content="${escape(s.description)}" />
<meta name="twitter:image" content="${escape(s.image)}" />
<script id="site-schema" type="application/ld+json">${JSON.stringify(s.schema).replaceAll('<', '\\u003c')}</script>`;
}
