import {
  BLOG_POSTS,
  CONTACT_INFO,
  FAQS,
  NEIGHBORHOODS_DATA,
} from "./constants";
import topics from "./topics-content.json";
export const SITE_URL = "https://www.beatrizfauthpsicologa.com.br";
const pages: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Psicóloga em Balneário Camboriú | Beatriz Fauth",
    description:
      "Beatriz Fauth, psicóloga e psicanalista em Balneário Camboriú. Atendimento no Centro e online. CRP 12/00649. Informações: (47) 99985-8983.",
  },
  "/sobre": {
    title: "Beatriz Fauth | Psicóloga e psicanalista em Balneário Camboriú",
    description:
      "Conheça a proposta de trabalho de Beatriz Fauth, psicóloga e psicanalista, CRP 12/00649. Escuta e atendimento em Balneário Camboriú.",
  },
  "/servicos": {
    title: "Atendimento psicológico em Balneário Camboriú | Beatriz Fauth",
    description:
      "Conheça as modalidades: individual, casal e familiar, grupo, jovens e online. Consulte as condições de atendimento com Beatriz Fauth.",
  },
  "/contato": {
    title: "Contato com Beatriz Fauth | (47) 99985-8983",
    description:
      "Solicite informações pelo WhatsApp (47) 99985-8983. Rua 1021, 254, sala 3, Centro, Balneário Camboriú. Atendimento mediante agendamento.",
  },
  "/blog": {
    title: "Orientações sobre psicologia e atendimento | Beatriz Fauth",
    description:
      "Informações sobre primeira consulta, terapia de casal e atendimento online. Acesse também guias sobre temas atuais de psicologia.",
  },
  "/regiao": {
    title: "Psicóloga no Centro de Balneário Camboriú e região | Beatriz Fauth",
    description:
      "Endereço do consultório de Beatriz Fauth no Centro de Balneário Camboriú. Orientações para moradores de BC, Camboriú, Itajaí e Itapema.",
  },
  "/temas": {
    title: "Psicologia em debate: IA, relações e cuidado | Beatriz Fauth",
    description:
      "Guias informativos sobre IA e terapia, autodiagnóstico, relações, medicação e privacidade no atendimento online. Fontes públicas e cuidados.",
  },
  "/privacidade": {
    title: "Privacidade e uso de dados | Beatriz Fauth",
    description:
      "Como funciona o formulário, o contato via WhatsApp e os links externos do site de Beatriz Fauth. Cuidados com seus dados pessoais.",
  },
};
export function getSeo(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const post = BLOG_POSTS.find((p) => path === `/blog/${p.slug}`);
  const topic = topics.find((p) => path === `/temas/${p.id}`);
  const neighborhood = NEIGHBORHOODS_DATA.find(
    (n) => path === `/bairro/${n.slug}`,
  );
  const page =
    pages[path] ||
    (post && {
      title: `${post.title} | Beatriz Fauth`,
      description: post.excerpt,
    }) ||
    (topic && {
      title: `${topic.title} | Beatriz Fauth`,
      description: topic.excerpt,
    }) ||
    neighborhood;
  const title = page?.title || "Página não encontrada | Beatriz Fauth";
  const description =
    page?.description ||
    "A página solicitada não foi encontrada. Consulte o atendimento e o contato de Beatriz Fauth.";
  const url = SITE_URL + (path === "/" ? "/" : path);
  const noindex =
    !page || Boolean(neighborhood && neighborhood.slug !== "centro");
  const image = SITE_URL + "/images/og-beatriz.png";
  const provider = {
    "@type": "ProfessionalService",
    "@id": SITE_URL + "/#consultorio",
    name: "Beatriz Fauth — Psicologia e Psicanálise",
    url: SITE_URL + "/",
    telephone: "+" + CONTACT_INFO.phoneRaw,
    email: CONTACT_INFO.email,
    image: SITE_URL + "/images/logo-beatriz.jpeg",
    logo: SITE_URL + "/favicon.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua 1021, 254, sala 3, Centro",
      addressLocality: "Balneário Camboriú",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.facebook],
  };
  const graph: object[] = [
    provider,
    {
      "@type": "Person",
      "@id": SITE_URL + "/#beatriz",
      name: "Beatriz Fauth",
      jobTitle: "Psicóloga e psicanalista",
      identifier: CONTACT_INFO.crp,
      image: SITE_URL + "/images/logo-beatriz.jpeg",
      worksFor: { "@id": provider["@id"] },
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL + "/",
      name: "Beatriz Fauth",
      inLanguage: "pt-BR",
      publisher: { "@id": provider["@id"] },
    },
    {
      "@type": "WebPage",
      "@id": url + "#webpage",
      url,
      name: title,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": SITE_URL + "/#website" },
      about: { "@id": provider["@id"] },
    },
  ];
  const faq =
    topic?.questions ||
    (["/", "/blog", "/contato"].includes(path) ? FAQS : null);
  if (faq)
    graph.push({
      "@type": "FAQPage",
      "@id": url + "#duvidas",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  if (post || topic)
    graph.push({
      "@type": "Article",
      headline: (post || topic).title,
      description,
      image,
      mainEntityOfPage: { "@id": url + "#webpage" },
      publisher: { "@id": provider["@id"] },
      inLanguage: "pt-BR",
      ...(topic ? { citation: topic.sources.map((s) => s.url) } : {}),
    });
  if (path !== "/" && page) {
    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL + "/",
      },
    ];
    if (post || topic)
      items.push({
        "@type": "ListItem",
        position: 2,
        name: topic ? "Temas em debate" : "Orientações",
        item: SITE_URL + (topic ? "/temas" : "/blog"),
      });
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: title.split(" | ")[0],
      item: url,
    });
    graph.push({ "@type": "BreadcrumbList", itemListElement: items });
  }
  return {
    title,
    description,
    url,
    image,
    noindex,
    type: post || topic ? "article" : "website",
    schema: { "@context": "https://schema.org", "@graph": graph },
  };
}
export const allRoutes = [
  ...Object.keys(pages),
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ...topics.map((t) => `/temas/${t.id}`),
  ...NEIGHBORHOODS_DATA.map((n) => `/bairro/${n.slug}`),
];
export function headMarkup(path: string) {
  const s = getSeo(path);
  const escape = (v: string) =>
    v
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  return `<title>${escape(s.title)}</title>
<meta name="description" content="${escape(s.description)}" />
<meta name="robots" content="${s.noindex ? "noindex,follow" : "index,follow,max-image-preview:large"}" />
<link rel="canonical" href="${escape(s.url)}" />
<meta property="og:type" content="${s.type}" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="Beatriz Fauth" />
<meta property="og:title" content="${escape(s.title)}" />
<meta property="og:description" content="${escape(s.description)}" />
<meta property="og:url" content="${escape(s.url)}" />
<meta property="og:image" content="${escape(s.image)}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="Beatriz Fauth, Psicologia e Psicanálise. Balneário Camboriú. (47) 99985-8983. CRP 12/00649." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(s.title)}" />
<meta name="twitter:description" content="${escape(s.description)}" />
<meta name="twitter:image" content="${escape(s.image)}" />
<meta name="twitter:image:alt" content="Beatriz Fauth, Psicologia e Psicanálise. (47) 99985-8983." />
<script id="site-schema" type="application/ld+json">${JSON.stringify(s.schema).replaceAll("<", "\\u003c")}</script>`;
}
