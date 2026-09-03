# Publicação do site

O site gera HTML completo para cada rota. A hospedagem deve publicar a pasta dist produzida por npm run build.

1. Instale as dependências com npm ci.
2. Execute npm run build.
3. Execute npm run typecheck e npm run check:seo.
4. Publique dist na hospedagem existente. Netlify e Vercel podem executar o build ao receber atualizações do GitHub, se a integração estiver configurada.

Não reescreva todas as rotas para a página inicial: as páginas agora existem como arquivos e URLs desconhecidas devem responder HTTP 404. As configurações do Netlify, Vercel e Apache estão incluídas.

Confira as rotas /regiao, /blog, /sitemap.xml e /robots.txt depois de publicar. Consulte SEO_ATUALIZACAO.md para os detalhes e as informações que precisam ser confirmadas pela proprietária.
