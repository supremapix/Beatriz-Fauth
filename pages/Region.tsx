import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NEIGHBORHOODS_DATA } from '../constants';

export default function Region() {
  return <div className="pt-32 pb-20 bg-sand">
    <div className="max-w-4xl mx-auto px-6">
      <p className="text-navy-light uppercase tracking-widest text-sm mb-4">Localização e modalidades</p>
      <h1 className="text-4xl md:text-6xl text-navy serif mb-8">Psicóloga em Balneário Camboriú: atendimento para a região</h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-10">Beatriz Fauth oferece atendimento presencial no Centro de Balneário Camboriú e atendimento online. Quem mora em outro bairro ou cidade pode entrar em contato para conversar sobre a modalidade e os horários disponíveis.</p>
      <section className="bg-white rounded-2xl p-8 mb-8">
        <h2 className="text-3xl text-navy mb-4">Um endereço de referência no Centro</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{CONTACT_INFO.address}. O atendimento é realizado mediante agendamento. Confirme o horário e as orientações de chegada antes de sair.</p>
        <a className="text-navy underline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer">Consultar o endereço no mapa</a>
      </section>
      <section className="mb-10 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-3xl text-navy">Você vem de Camboriú, Itajaí ou Itapema?</h2>
        <p>Se você mora em uma dessas cidades e busca atendimento em Balneário Camboriú, considere o deslocamento até o Centro ao escolher seu horário. O tempo de viagem varia conforme o ponto de partida e o trânsito; consulte a rota no dia da sessão.</p>
        <p>Para quem prefere conversar sem esse deslocamento, é possível perguntar sobre o atendimento online. A adequação da modalidade e as condições da consulta são combinadas diretamente com a profissional.</p>
        <p>O endereço presencial informado neste site fica em Balneário Camboriú. As cidades mencionadas são referências para quem está organizando a consulta, não endereços de filiais.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-3xl text-navy mb-4">Orientações para os bairros de Balneário Camboriú</h2>
        <p className="text-gray-700 mb-6">O local do atendimento presencial é o mesmo para moradores dos bairros abaixo.</p>
        <div className="flex flex-wrap gap-3">{NEIGHBORHOODS_DATA.map(n => <Link key={n.slug} to={`/bairro/${n.slug}`} className="bg-white rounded-full px-4 py-2 text-navy underline">{n.name}</Link>)}</div>
      </section>
      <section className="bg-white rounded-2xl p-8">
        <h2 className="text-3xl text-navy mb-4">Como solicitar seu horário</h2>
        <p className="text-gray-700 leading-relaxed mb-6">Informe a modalidade de interesse e se prefere atendimento presencial ou online. Confirme valores, duração e disponibilidade. O contato inicia uma solicitação; a consulta depende da confirmação da profissional.</p>
        <a href={`https://wa.me/${CONTACT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-navy text-white px-6 py-3 rounded-full">Conversar pelo WhatsApp</a>
        <p className="mt-6 text-navy">Beatriz Fauth · Psicóloga e psicanalista · {CONTACT_INFO.crp}</p>
        <Link to="/blog/primeira-consulta-balneario-camboriu" className="block mt-4 text-navy underline">Leia as orientações para a primeira consulta</Link>
      </section>
    </div>
  </div>;
}
