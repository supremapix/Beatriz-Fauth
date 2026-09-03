import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS, CONTACT_INFO } from '../constants';
import NotFound from './NotFound';

export default function Article() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <NotFound />;
  return <article className="pt-32 pb-20 bg-sand">
    <div className="max-w-3xl mx-auto px-6">
      <nav aria-label="Navegação estrutural" className="text-navy mb-8"><Link to="/">Início</Link> / <Link to="/blog">Blog</Link></nav>
      <p className="text-navy-light mb-4">{post.category}</p>
      <h1 className="text-4xl md:text-5xl text-navy serif mb-6">{post.title}</h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-8">{post.excerpt}</p>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-2xl mb-10" />
      {post.sections.map(section => <section key={section.heading} className="mb-8">
        <h2 className="text-3xl text-navy mb-4">{section.heading}</h2>
        <p className="text-gray-700 leading-relaxed text-lg">{section.text}</p>
      </section>)}
      <aside className="bg-white rounded-2xl p-8 mt-10">
        <h2 className="text-2xl text-navy mb-3">Fale com o consultório</h2>
        <p className="text-gray-700 mb-4">Beatriz Fauth · Psicóloga e psicanalista · {CONTACT_INFO.crp}</p>
        <p className="text-gray-700 mb-6">{CONTACT_INFO.address}</p>
        <a className="inline-block bg-navy text-white px-6 py-3 rounded-full" href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer">Consultar disponibilidade</a>
        <Link className="block text-navy underline mt-6" to="/regiao">Veja as orientações para Balneário Camboriú e região</Link>
      </aside>
      <nav aria-label="Outras leituras" className="mt-10 space-y-4">{BLOG_POSTS.filter(p => p.slug !== slug).map(p => <Link key={p.slug} className="block text-navy underline" to={`/blog/${p.slug}`}>{p.title}</Link>)}</nav>
    </div>
  </article>;
}
