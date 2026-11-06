# Seção contextual de contato

## Implementação

- `components/PageContactSection.tsx` é renderizado uma única vez em `App.tsx`, dentro de `main`, depois das rotas. Substitui as antigas instâncias de `ContactBand`, inclusive nas páginas de contato, privacidade e erro 404.
- Título, descrição e botão próprios para as oito páginas institucionais, os três artigos e os cinco guias. As páginas de bairros usam os nomes de `NEIGHBORHOODS_DATA`; artigos e guias são identificados pelo corpus existente. Slugs desconhecidos recebem o contexto de página não encontrada.
- `public/images/beatriz-contato.svg` traz a identidade Ψ + Beatriz Fauth, telefone e CRP em uma arte gráfica de 250 × 250 pixels. Não representa pacientes. O telefone também aparece em um link `tel:` legível e acessível fora da imagem.
- `components/contact-section.css` isola os estilos: conteúdo e botões de 18 px, auxiliares de 16 px, alvos com altura mínima de 56 px, unidades relativas e uma coluna em telas menores. O texto pode quebrar sem altura fixa para acomodar ampliação.
- Os botões apenas consultam informações. A mensagem pré-preenchida de WhatsApp é neutra e não inclui a página, o tema lido ou uma condição de saúde. Nenhum contato confirma um agendamento.

## Verificação

- `npm run typecheck`: passou.
- Renderização SSR de 38 caminhos (33 rotas existentes, 404 e quatro caminhos/slugs inválidos): exatamente uma seção contextual, imagem e telefone presentes em todos; nenhuma `ContactBand` remanescente. Normalização da barra final também verificada.
- Contrastes calculados: texto principal 9,79:1; auxiliares 7,93:1; identificação contextual 6,56:1; botão 7,76:1; texto da arte 11,01:1. Foco sobre o fundo da seção: 5,80:1.
- Arte SVG renderizada e inspecionada a 250 × 250 pixels; nome, telefone e CRP legíveis, sem cortes.
- Testes integrados no navegador: 320 e 390 px, paisagem 768 × 580 e desktop 1440 px; ampliação de texto a 200% e espaçamento ampliado. Início, serviços e contato sem rolagem horizontal. A arte aparece inteira e o telefone está disponível em HTML.
- Build completo e verificações de SEO, links, âncoras, imagens e contraste aprovados em 6 de novembro de 2026.

Ao alterar telefone ou registro, atualize `constants.ts` e a arte SVG juntos. Este lote permanece local, aguardando aprovação antes da publicação.
