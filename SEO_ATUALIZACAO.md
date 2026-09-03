# Conteúdo e presença local

O site mantém a identidade visual existente e passa a gerar HTML completo por endereço. Não depende de créditos do Bolt.new para edição ou compilação pelo GitHub.

## Conteúdo

- Página inicial identifica psicóloga, psicanalista, CRP e localização.
- Página `/regiao` organiza endereço, deslocamento e modalidades para Balneário Camboriú e para quem vem de Camboriú, Itajaí e Itapema. Não anuncia filiais nessas cidades.
- Três artigos de orientação sobre agendamento, casal e atendimento online, com links reais.
- Perguntas frequentes com respostas disponíveis no HTML e controles acessíveis.
- Removidas referências a psiquiatria, depoimentos de bairros sem comprovação e contadores de resultados/avaliações sem fonte.
- Contato e CRP preservados do repositório. A proprietária deve confirmar se continuam atuais, assim como valores, horários e formação já publicados.

## Indexação

- Títulos, descrições, canonical no domínio com `www`, Open Graph e cartões sociais por rota.
- Dados estruturados de profissional, consultório, site, páginas, perguntas frequentes e artigos, sem avaliações ou credenciais inventadas.
- Sitemap e robots gerados automaticamente no build.
- URLs antigas de bairros continuam acessíveis. Fora do Centro, recebem `noindex,follow` por terem conteúdo muito semelhante. A página regional concentra as informações úteis.
- Página 404 gerada; regras de hospedagem deixam de transformar qualquer URL inexistente na página inicial.
- O navegador monta os componentes interativos sobre o HTML estático, usando o mesmo conteúdo. Não há diferenciação por robô.

## Publicação pelo GitHub

Execute `npm ci`, `npm run build`, `npm run typecheck` e `npm run check:seo`. Publique a pasta `dist`. Node.js 22 LTS é recomendado.

Se o projeto no Netlify ou Vercel estiver conectado a este repositório e à branch `main`, a atualização da branch poderá disparar o deploy. A existência dos arquivos de configuração não comprova essa conexão. Se a hospedagem for manual, envie o conteúdo de `dist` pelo painel da hospedagem.

Depois do deploy, confira `/`, `/regiao`, um artigo, `/sitemap.xml`, `/robots.txt` e uma URL inexistente (HTTP 404). A consulta de Search Console e Perfil da Empresa depende do acesso às contas correspondentes.

## GEO e respostas com IA

A estratégia usa conteúdo legível, dados coerentes e links internos. Não promete posição, indexação nem citação por IA. A documentação do Google informa que os fundamentos de SEO continuam válidos para AI Overviews e AI Mode, sem arquivo ou marcação especial obrigatória: https://developers.google.com/search/docs/appearance/ai-features.

Próximos dados que dependem da proprietária: cidades prioritárias, contato/endereço atual, link do Perfil da Empresa no Google e hospedagem efetivamente conectada.
