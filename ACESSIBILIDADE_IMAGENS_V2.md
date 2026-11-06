# Revisão de leitura, imagens e contato

Preparada em 6 de novembro de 2026. **Aguardando aprovação para publicação.**

## O que mudou

- Textos principais de 18 px, avisos auxiliares de 16 px e unidades relativas para respeitar a ampliação escolhida no navegador.
- Mais contraste para textos, links, números dos serviços e contornos dos campos.
- Menu mobile com o rótulo visível “Menu”/“Fechar”, links de pelo menos 56 px de altura, rolagem interna em telas baixas e fechamento por Escape com devolução do foco.
- Cabeçalho que deixa de ocupar permanentemente a tela quando o texto ampliado o torna muito alto. Navegação entre páginas posiciona e foca o conteúdo principal.
- Rodapé em ordem lógica: apresentação, contato e navegação. Telefone e WhatsApp são botões explícitos; redes sociais têm nomes visíveis. Links de navegação medem pelo menos 56 px no celular.
- Cinco novas ilustrações coerentes com a identidade visual: atendimento individual, casal e familiar, grupo, online e jovens. Cada uma contém título, nome, telefone e CRP. O telefone também aparece como texto e link de ligação fora da imagem. As artes não são apresentadas como fotos de pacientes ou do consultório.
- Imagens WebP em 1448 × 1086, exibidas inteiras em proporção 4:3, sem recortar telefone ou título. As cinco somam aproximadamente 768 KB.
- Uma seção contextual por página, com arte de identidade de 250 × 250, título, descrição, identificação profissional, telefone e ação adequados ao assunto da página.
- Seções contextualizadas nas páginas institucionais, artigos, guias, bairros e página não encontrada. Mensagem externa de WhatsApp sempre neutra, sem enviar o assunto que a pessoa estava lendo.

## Verificações concluídas

- TypeScript, build de produção e pré-renderização de 33 páginas mais a página 404.
- Links internos e âncoras, imagens, metadados, schema, FAQ, sitemap e regras de indexação preservados. Permanecem 17 entradas indexáveis no sitemap.
- Crédito Suprema em todas as páginas, 15 textos alternados, seis destinos sociais, copiar texto, ícones e imagem de compartilhamento preservados nas verificações automáticas.
- Uma única seção contextual, arte e telefone em HTML em todas as 34 páginas geradas. Verificação adicional de rotas inválidas e barra final.
- Navegador: 320 e 390 px, paisagem 768 × 580 e desktop de 1440 px. Texto a 200%, mais espaçamento entre letras, palavras, linhas e parágrafos. Início, serviços e contato sem rolagem horizontal nos cenários verificados.
- Menu: abertura, fechamento por Escape, retorno de foco e navegação para contato. Em paisagem, menu com rolagem dentro da área disponível, sem esconder os últimos itens.
- Telefone e títulos das cinco artes conferidos visualmente e por OCR. Arte 250 × 250 e imagens mobile inspecionadas sem cortes.
- Contrastes principais verificados por cálculo. Revisão de código independente sem regressões críticas após as correções.
- Arquivo temporário de testes removido do site e do build final.

Estas verificações não equivalem a uma certificação integral de acessibilidade nem a um teste com todas as tecnologias assistivas. Nenhuma mensagem, chamada ou solicitação de consulta foi enviada durante os testes.

## Conteúdo profissional

Mantidos telefone (47) 99985-8983 e CRP 12/00649 conforme a informação do site e a orientação recebida. O registro não foi confirmado em cadastro independente. Não foram adicionadas credenciais, depoimentos, disponibilidade 24 horas ou promessas de resultado.

## Publicação

O lote anterior segue preservado em produção no commit `d47f6509fbd31f5de18d04f6a1d6eaeb57aa38fc`. Esta revisão ainda não foi enviada ao GitHub nem à Vercel. A publicação exige aprovação do novo lote.

Depois da aprovação, publicar o commit revisado, aguardar o deploy e conferir novamente as rotas, as seis novas imagens e as interações em produção.
