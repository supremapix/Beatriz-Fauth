# Revisão de leitura e prioridades

6 de novembro de 2026. **Versão local, aguardando aprovação para publicação.** Esta revisão complementa o lote de imagens e acessibilidade V2 e substitui seus tamanhos de texto e sua ordem do rodapé.

## Mudanças principais

- Texto principal de 20 px, menu mobile de 20 px e alvos de pelo menos 60 px. Rodapé com links de 20 px e avisos de 18 px. Unidades relativas preservam a ampliação escolhida pelo visitante.
- Texto escurecido para verde profundo. Fundos de seção alternam branco e verde, com divisórias mais visíveis. A faixa de apresentação usa fundo verde-escuro e texto branco.
- Itálicos corrigidos para contraste acima de 4,5:1. Texto principal no rodapé tem 7,07:1; texto branco sobre verde-escuro tem mais de 11:1.
- Início mais direto: identificação da profissional, modalidades de atendimento, WhatsApp, telefone completo clicável e endereço aparecem antes da fotografia.
- Menu prioriza Contato e Endereço, seguido de Atendimentos, informações profissionais e orientações. Botões “Menu” e “Fechar” explícitos, com rolagem interna e fechamento por Escape.
- Rodapé começa por telefone, WhatsApp e endereço, inclusive na ordem de leitura do HTML. Apresentação e redes sociais vêm depois das informações essenciais.
- Legenda da fotografia passa a ocupar espaço próprio, evitando sobreposição e corte com letras ampliadas.

## Imagens dos serviços

As cinco artes refeitas no lote V2 foram novamente inspecionadas individualmente e correspondem aos serviços:

1. Individual: uma pessoa em conversa com a terapeuta.
2. Casal e familiar: núcleo familiar em conversa com a terapeuta.
3. Grupo: participantes em roda com uma profissional.
4. Online: conversa por videoconferência em computador.
5. Jovens: jovem em atendimento, com elementos visuais próprios dessa fase de vida.

Todas mantêm o título correto e o telefone (47) 99985-8983 legível, repetido em texto acessível fora da imagem. São ilustrações, sem alegação de retratar pacientes ou o consultório reais. Não foi necessária uma nova substituição dessas cinco artes nesta revisão: elas continuam prontas para substituir as imagens antigas da versão publicada.

## Verificações

- Navegador, com início, serviços e contato a 320 px, texto a 200% e espaçamento ampliado entre letras, palavras, linhas e parágrafos: sem rolagem horizontal após correções.
- Início a 768 e 1440 px, texto a 200% e espaçamento ampliado: sem rolagem horizontal.
- Mobile a 390 px: fonte principal, menu e links do rodapé medidos em 20 px; contato como primeira área do rodapé; botões de contato com 62 px de altura.
- Menu: abertura, Escape e devolução do foco; navegação até Endereço fecha o menu e foca o conteúdo principal.
- Revisão de código sem erro crítico encontrado.
- TypeScript, build, 33 rotas mais 404, links, âncoras, imagens, dados estruturados, sitemap e verificações Suprema aprovados.
- Arquivo temporário de teste removido antes do build.

São testes dos cenários descritos, não uma certificação integral de acessibilidade ou teste com todos os leitores de tela. Nenhuma mensagem, ligação ou solicitação de agendamento foi enviada.

## Estado de publicação

Produção permanece no lote anterior (`d47f650`). Os lotes V2 e V3 continuam locais. Após aprovação, publicar a versão completa e verificar novamente o site em produção.
