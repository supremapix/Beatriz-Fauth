# Pacote Suprema — Beatriz Fauth

## Implementado

- Redesign completo em verde profundo, sálvia e creme, tipografia local, fotografia real e componentes responsivos.
- Páginas institucionais, modalidades, contato, localização, orientações, privacidade e 404.
- Hub `/temas` e cinco guias educativos com fontes oficiais: IA e terapia; autodiagnóstico nas redes; narcisismo e rótulos; psicoterapia e medicamentos; atendimento online e privacidade. Acesso pelo blog e pela página inicial.
- Três artigos de orientação preservados, 17 páginas de bairro mantidas sem anunciar filiais. Só o Centro permanece indexável; os demais endereços de conteúdo semelhante continuam `noindex,follow`.
- Identificação e contato coerentes; CRP 12/00649 mantido conforme instrução, apesar da divergência encontrada em imagem antiga. Não houve confirmação cadastral independente.
- Remoção de preços promocionais, garantias de resultados/sigilo absoluto, formação não corroborada e agendamento que parecia uma reserva em tempo real.
- Formulário mínimo, sem relatos clínicos, revisão antes de abrir WhatsApp, sem banco de dados ou armazenamento local.
- Rodapé Suprema em todas as páginas, coração, logo fornecido e link solicitado.
- Compartilhamento em WhatsApp, Facebook, X, Pinterest, LinkedIn e Threads; copiar texto e link com feedback; 15 sugestões alternadas a cada 15 segundos (pausadas enquanto o texto está em foco ou a aba está oculta).
- Botões de ligação, WhatsApp e voltar ao topo após 300px; menu por teclado e Escape; foco após navegação; redução de movimento; FAQ nativo.
- HTML completo por rota, título/descrição/canonical únicos, Open Graph 1200×630 com identificação/telefone, Twitter Cards, Person, ProfessionalService, WebSite, WebPage, Article, FAQ e BreadcrumbList coerentes.
- Pacote de favicon SVG/ICO/PNG, Apple Touch e manifest web nos formatos usuais do RealFaviconGenerator. Gerado localmente; não houve submissão ao serviço externo.
- Sitemap/robots automáticos e llms.txt auxiliar, sem promessa de ranking, indexação ou citação por IA.
- Dependências atualizadas dentro das versões compatíveis. Definições de chaves de API no bundle removidas.

## Limites e validação

- Build, TypeScript e verificações estáticas devem ser executados no estado final com `npm run check`.
- As verificações abrangem HTML de todas as rotas, H1, canonical, schema, FAQ, sitemap, arquivos e links/âncoras internos, identificação, crédito, OG, ícones e requisitos de compartilhamento.
- Teste visual desktop e mobile em viewport de conteúdo de aproximadamente 375px; navegação/menu, formulário de revisão, compartilhamento/cópia, cancelamento e botão de topo testados sem enviar mensagens a terceiros.
- As prévias e textos aceitos nas redes dependem da plataforma. Não se pode obrigar Facebook/LinkedIn a usarem o texto sugerido, nem garantir atualização imediata de cache.
- Guias são informativos com referências públicas, sem atribuição de autoria ou revisão clínica à profissional. Revisão editorial/clínica pela responsável é recomendada.
- Publicação, cabeçalhos HTTP, redirects, Search Console e Perfil da Empresa exigem verificação na hospedagem e nas contas correspondentes. Arquivos locais aprovados não comprovam deploy.
