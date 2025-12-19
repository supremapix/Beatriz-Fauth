
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
    question: "Convênios são aceitos?",
    answer: "Sim, após o final da sessão e o pagamento dela, o paciente encaminha o recibo para o convênio médico, sendo assim reembolsado pelo valor pago."
  },
  {
    question: "Qual tempo de duração de cada sessão?",
    answer: "As sessões duram, em geral, de 50 minutos a 1 hora. Isso porque é tempo médio em que os pacientes se sentem confortáveis."
  },
  {
    question: "Qual tempo de duração do tratamento?",
    answer: "Não há um tempo fixo de duração do tratamento, vai depender da queixa e do engajamento do paciente com relação à terapia."
  },
  {
    question: "A terapia online funciona?",
    answer: "Sim, inclusive é reconhecida pelo Conselho de Psicologia. Ela é realizada através de um meio eletrônico, como as plataformas de vídeo chamadas (Skype ou Zoom)."
  },
  {
    question: "Como marcar uma consulta?",
    answer: "Aqui pelo meu site você consegue fazer o agendamento da sua primeira consulta. As próximas, agendamos após o encerramento de cada sessão."
  },
  {
    question: "Como sei que preciso de algum tratamento?",
    answer: "As terapias não servem só para resolver problemas, mas também para ajudar no desenvolvimento. Em caso de dúvida, estou no WhatsApp."
  }
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "Terapia de casal em Balneário Camboriú",
    excerpt: "Descubra como funciona a terapia de casal com Beatriz Fauth em Balneário Camboriú. Melhore o diálogo, supere conflitos e fortaleça seu relacionamento.",
    image: "/images/blog-terapia-casal-1.jpg",
    category: "Terapia de Casal"
  },
  {
    id: "2",
    title: "O Que é Terapia de Casal?",
    excerpt: "Transforme seu relacionamento com a ajuda da terapia de casal. Beatriz Fauth Psicologia e Psicanálise está aqui para guiar você nessa jornada de crescimento e reconexão.",
    image: "/images/blog-terapia-casal-2.jpg",
    category: "Terapia de Casal"
  },
  {
    id: "3",
    title: "Diferenças entre Psicologia, Psicanálise e Psiquiatria",
    excerpt: "Consultar um profissional de saúde mental é crucial para um diagnóstico preciso e tratamento adequado. Objetivo: compreender conflitos internos, traumas e padrões inconscientes.",
    image: "/images/blog-psicologia.jpg",
    category: "Psicologia"
  },
  {
    id: "4",
    title: "Beatriz Fauth | Psicóloga em Balneário Camboriú",
    excerpt: "Dificuldades no relacionamento? A psicóloga Beatriz Fauth oferece terapia de casal em Balneário Camboriú para melhorar a comunicação e fortalecer os vínculos.",
    image: "/images/beatriz-profile.jpg",
    category: "Sobre"
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
    description: `A terapia online permite que você receba atendimento psicológico de qualquer lugar, utilizando plataformas seguras de videoconferência como Skype ou Zoom.

Esta modalidade é reconhecida pelo Conselho de Psicologia e oferece a mesma qualidade e rigor ético do atendimento presencial.

Ideal para quem busca flexibilidade de horários e a conveniência de realizar as sessões no conforto de sua casa.`,
    image: "/images/terapia-online.jpg"
  }
};
