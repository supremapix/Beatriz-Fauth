
export const CONTACT_INFO = {
  phone: "(47) 99985-8983",
  phoneRaw: "5547999858983",
  address: "Rua 1021, 254, sala 3, Balneário Camboriú - SC",
  email: "contato@beatrizfauthpsicologa.com.br",
  facebook: "https://www.facebook.com/profile.php?id=61557453232999",
  instagram: "https://www.instagram.com/beatrizfauthpsicologa/",
  crp: "CRP 12/00649"
};

export const NEIGHBORHOODS = [
  "Centro", "Ariribá", "Barra (Norte e Sul)", "Nações", "Estados",
  "Pioneiros", "Vila Real", "Nova Esperança", "Jardim Iate Clube",
  "Municípios", "São Judas Tadeu", "Praia dos Amores", "Estaleiro",
  "Estaleirinho", "Taquaras", "Laranjeiras"
];

export const NEIGHBORHOODS_DATA = [
  {
    "slug": "centro",
    "name": "Centro"
  },
  {
    "slug": "barra",
    "name": "Barra"
  },
  {
    "slug": "praia-dos-amores",
    "name": "Praia dos Amores"
  },
  {
    "slug": "nacoes",
    "name": "Nações"
  },
  {
    "slug": "estados",
    "name": "Estados"
  },
  {
    "slug": "pioneiros",
    "name": "Pioneiros"
  },
  {
    "slug": "vila-real",
    "name": "Vila Real"
  },
  {
    "slug": "nova-esperanca",
    "name": "Nova Esperança"
  },
  {
    "slug": "aririba",
    "name": "Ariribá"
  },
  {
    "slug": "jardim-iate-clube",
    "name": "Jardim Iate Clube"
  },
  {
    "slug": "municipios",
    "name": "Municípios"
  },
  {
    "slug": "sao-judas-tadeu",
    "name": "São Judas Tadeu"
  },
  {
    "slug": "estaleiro",
    "name": "Estaleiro"
  },
  {
    "slug": "estaleirinho",
    "name": "Estaleirinho"
  },
  {
    "slug": "taquaras",
    "name": "Taquaras"
  },
  {
    "slug": "laranjeiras",
    "name": "Laranjeiras"
  },
  {
    "slug": "area-rural",
    "name": "Área Rural"
  }
].map(place => ({
  ...place,
  title: 'Psicóloga para moradores de ' + place.name + ' | Beatriz Fauth',
  description: 'Mora em ' + place.name + '? Conheça o atendimento de Beatriz Fauth no Centro de Balneário Camboriú e a modalidade online. Agendamento pelo WhatsApp.',
  intro: 'Para quem mora em ' + place.name + ', o atendimento presencial acontece na Rua 1021, 254, sala 3, no Centro de Balneário Camboriú. Considere o deslocamento até esse endereço ao escolher seu horário. Você também pode conversar sobre a possibilidade de atendimento online, conforme sua necessidade e a avaliação da profissional.'
}));

export const SCHEDULING_SERVICES = [
  {
    id: "grupo",
    title: "Terapia de Grupo",
    description: "A terapia de grupo tem um longo e comprovado registro como uma forma bastante efetiva e produtiva de psicoterapia.",
    price: "R$ 150,00",
    duration: "01:00",
    image: "/images/terapia-grupo.jpg"
  },
  {
    id: "casal",
    title: "Terapia casal",
    description: "É uma modalidade de terapia que tem como objetivo ajudar o casal que está enfrentando problemas no relacionamento.",
    price: "R$ 150,00",
    duration: "01:00",
    image: "/images/terapia-casal.jpg"
  },
  {
    id: "individual",
    title: "Terapia individual",
    description: "Modalidade de atendimento de um paciente através de técnicas personalizadas.",
    price: "R$ 150,00",
    duration: "01:00",
    image: "/images/terapia-individual.jpg"
  },
  {
    id: "online",
    title: "Terapia online",
    description: "É uma modalidade de terapia que permite o atendimento feito à distância.",
    price: "R$ 150,00",
    duration: "01:00",
    image: "/images/terapia-online.jpg"
  }
];

export const SPECIALTIES = [
  {
    title: "Psicanálise Individual",
    description: "Um processo de investigação do inconsciente que permite ao sujeito lidar com seus sintomas, angústias e impasses, buscando uma nova posição diante da vida.",
    path: "/servicos#individual"
  },
  {
    title: "Terapia de Casal e Família",
    description: "Abordagem focada na escuta das dinâmicas relacionais, auxiliando na resolução de conflitos e no fortalecimento dos vínculos afetivos através do diálogo.",
    path: "/servicos#familiar"
  },
  {
    title: "Atendimento a Jovens",
    description: "Acompanhamento especializado para adolescentes em fase de transição, oferecendo suporte para questões de identidade, escolha profissional e pressões sociais.",
    path: "/servicos#jovens"
  }
];

export const FAQS = [
  {
    "question": "Onde fica o consultório de Beatriz Fauth?",
    "answer": "O endereço informado é Rua 1021, 254, sala 3, no Centro de Balneário Camboriú, Santa Catarina. Confirme o horário pelo WhatsApp (47) 99985-8983 antes de se deslocar."
  },
  {
    "question": "Quem mora em outras cidades pode consultar?",
    "answer": "Quem mora na região pode agendar atendimento presencial no consultório em Balneário Camboriú ou conversar sobre a modalidade online. Não há outros endereços de atendimento informados neste site."
  },
  {
    "question": "Como solicitar a primeira consulta?",
    "answer": "Entre em contato pelo WhatsApp (47) 99985-8983 e informe se prefere atendimento presencial ou online. O envio de uma solicitação pelo site não confirma uma reserva: aguarde a confirmação da profissional."
  },
  {
    "question": "Como funciona a primeira conversa?",
    "answer": "É um momento para apresentar o que motivou a busca por atendimento, tirar dúvidas sobre a abordagem e conversar sobre a continuidade. Você não precisa preparar um relato perfeito; pode começar pelas questões que deseja compartilhar."
  },
  {
    "question": "Como consultar valores e reembolso pelo plano?",
    "answer": "Confirme valores e formas de pagamento diretamente com a profissional. Se seu plano oferecer reembolso, consulte a operadora sobre cobertura, limites e documentos exigidos. A emissão de recibo não garante reembolso."
  },
  {
    "question": "Quanto tempo dura a sessão e o acompanhamento?",
    "answer": "O site informa sessões de aproximadamente 50 minutos a uma hora. Confirme a duração da modalidade escolhida no agendamento. A frequência e a duração do acompanhamento são combinadas conforme cada situação."
  },
  {
    "question": "O que preciso para uma sessão online?",
    "answer": "Um ambiente reservado, conexão estável e um dispositivo com câmera e microfone. A plataforma e a adequação dessa modalidade ao seu caso devem ser combinadas com a profissional antes da consulta."
  }
];

export const BLOG_POSTS = [
  {
    "id": "1",
    "slug": "primeira-consulta-balneario-camboriu",
    "title": "Primeira consulta em Balneário Camboriú: como se organizar",
    "excerpt": "Endereço, contato e dúvidas para organizar o primeiro atendimento presencial ou online.",
    "image": "/images/blog-psicologia.jpg",
    "category": "Primeira consulta",
    "sections": [
      {
        "heading": "Por onde começar",
        "text": "Para solicitar uma consulta com Beatriz Fauth, entre em contato pelo WhatsApp (47) 99985-8983. Informe se procura atendimento individual, de casal ou outra modalidade e se prefere conversar presencialmente ou online. A disponibilidade precisa ser confirmada pela profissional."
      },
      {
        "heading": "Antes de ir ao consultório",
        "text": "O consultório fica na Rua 1021, 254, sala 3, no Centro de Balneário Camboriú. Confirme o endereço e o horário antes de sair. Se você vem de outro bairro ou cidade, reserve tempo para o deslocamento e consulte seu aplicativo de mapas no dia da sessão."
      },
      {
        "heading": "O que perguntar no agendamento",
        "text": "Você pode perguntar sobre duração, valores, formas de pagamento e como avisar caso precise remarcar. Se pretende solicitar reembolso, verifique previamente as condições do plano e quais documentos são necessários."
      },
      {
        "heading": "O que levar para a conversa",
        "text": "Não é necessário preparar uma apresentação. Você pode anotar as questões que deseja conversar e as dúvidas sobre o acompanhamento. A primeira conversa também serve para conhecer a forma de trabalho e combinar os próximos passos."
      }
    ]
  },
  {
    "id": "2",
    "slug": "terapia-casal-balneario-camboriu",
    "title": "Terapia de casal em Balneário Camboriú: dúvidas antes de agendar",
    "excerpt": "Saiba quais informações confirmar ao solicitar atendimento para o casal com Beatriz Fauth.",
    "image": "/images/blog-terapia-casal-1.jpg",
    "category": "Terapia de casal",
    "sections": [
      {
        "heading": "Como solicitar atendimento para o casal",
        "text": "Ao entrar em contato, informe que a solicitação é para terapia de casal. Beatriz Fauth apresenta essa modalidade entre os serviços do consultório em Balneário Camboriú. Pergunte sobre os horários disponíveis e a organização do primeiro encontro."
      },
      {
        "heading": "O que combinar antes da primeira sessão",
        "text": "Confirme quem deve participar do primeiro encontro, a duração prevista, o valor e as condições para remarcar. Se os participantes têm rotinas diferentes ou moram em cidades distintas, informe isso no contato inicial para conversar sobre as possibilidades."
      },
      {
        "heading": "Como apresentar o motivo da procura",
        "text": "O casal pode levar dúvidas sobre convivência, comunicação ou mudanças na relação. Não é preciso chegar com uma conclusão sobre o que acontece. Os objetivos e a forma de condução são conversados com a profissional, de acordo com a situação apresentada."
      },
      {
        "heading": "Presencial ou online",
        "text": "O endereço presencial informado é Rua 1021, 254, sala 3, Centro, Balneário Camboriú. Para saber se o atendimento online está disponível e é adequado para o casal, consulte a profissional antes de agendar."
      }
    ]
  },
  {
    "id": "3",
    "slug": "atendimento-online-regiao",
    "title": "Atendimento online para quem mora em Balneário Camboriú e região",
    "excerpt": "Privacidade, conexão e confirmação: veja o que organizar antes de uma consulta online.",
    "image": "/images/terapia-online.jpg",
    "category": "Atendimento online",
    "sections": [
      {
        "heading": "Converse sobre a modalidade",
        "text": "O atendimento online faz parte das modalidades apresentadas por Beatriz Fauth. Ao solicitar uma consulta, informe sua preferência para que a profissional avalie a possibilidade e combine como será o encontro. A solicitação pelo site depende de confirmação."
      },
      {
        "heading": "Prepare um espaço reservado",
        "text": "Escolha um local onde possa conversar com privacidade e avise, se necessário, que estará em uma chamada. Confira câmera, microfone e conexão antes do horário combinado. Fones de ouvido podem ajudar a preservar a conversa."
      },
      {
        "heading": "Combine a plataforma e os imprevistos",
        "text": "Pergunte qual plataforma será utilizada, como receber o acesso e o que fazer se a conexão cair. Confirme também duração, pagamento e remarcação. Evite compartilhar informações pessoais em ambientes públicos."
      },
      {
        "heading": "Para quem está na região",
        "text": "Se o deslocamento de seu bairro ou cidade até o Centro de Balneário Camboriú dificulta a organização da agenda, você pode perguntar sobre a modalidade online. A escolha depende da conversa com a profissional e das condições de privacidade para o atendimento."
      }
    ]
  }
];

export const SERVICES_DETAIL = {
  grupo: {
    title: "Terapia de Grupo",
    subtitle: "A terapia de grupo tem um longo e comprovado registro como uma forma bastante efetiva e produtiva de psicoterapia.",
    description: `Muitos indivíduos que procuram fazer terapia sentem-se isolados e insatisfeitos em sua situação de vida. Eles podem ter dificuldade para estabelecer e manter relacionamentos íntimos, gratificantes e significativos de uma forma mútua com outras pessoas.

Durante as sessões, esses indivíduos têm a oportunidade de explorar suas experiências passadas e como elas moldaram suas relações atuais. O terapeuta pode ajudá-los a identificar padrões de comportamento, crenças limitantes e emoções que interferem na formação de conexões saudáveis.

A terapia oferece ferramentas práticas para melhorar as habilidades de comunicação e a empatia, permitindo que os pacientes se conectem de maneira mais autêntica e significativa.`,
    image: "/images/terapia-grupo-large.jpg"
  },
  casal: {
    title: "Terapia de Casal",
    subtitle: "É uma modalidade de terapia que tem como objetivo ajudar o casal que está enfrentando problemas no relacionamento.",
    description: `A primeira consulta é feita sempre em casal, mas a partir daí as entrevistas são realizadas separadamente, até o casal ir novamente à sessão conjunta, onde ele já poderá sentir algumas mudanças.

Durante as sessões individuais, o terapeuta pode explorar questões específicas que podem não ser discutidas em um ambiente conjunto. Isso permite um mergulho mais profundo nas dinâmicas do relacionamento.

Na sessão conjunta, o foco é compartilhar as experiências vividas nas consultas individuais e trabalhar em conjunto para implementar as mudanças necessárias.`,
    image: "/images/terapia-casal-large.jpg"
  },
  individual: {
    title: "Terapia Individual",
    subtitle: "Modalidade de atendimento de um paciente através de técnicas personalizadas.",
    description: `Na terapia individual, eu emprego uma abordagem transpessoal, considerando todos os níveis do ser, como o físico, o mental, o emocional e o espiritual.

A terapia transpessoal visa promover um estado de equilíbrio e harmonia entre esses diferentes aspectos, reconhecendo que a saúde mental e emocional está interligada ao bem-estar geral.

A terapia individual transpessoal cria um espaço seguro onde cada pessoa pode explorar sua jornada única, descobrir novos caminhos e fortalecer sua conexão consigo mesma.`,
    image: "/images/terapia-individual-large.jpg"
  },
  online: {
    title: "Terapia Online",
    subtitle: "É uma modalidade de terapia que permite o atendimento feito à distância.",
    description: `A terapia online permite que você receba atendimento psicológico de qualquer lugar, utilizando plataformas seguras de videoconferência como a plataforma combinada com a profissional.

Esta modalidade é reconhecida pelo Conselho de Psicologia e oferece a mesma qualidade e rigor ético do atendimento presencial.

Ideal para quem busca flexibilidade de horários e a conveniência de realizar as sessões no conforto de sua casa.`,
    image: "/images/terapia-online.jpg"
  }
};
