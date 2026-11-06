# Publicação do site

O site gera HTML completo para cada rota. A hospedagem deve publicar a pasta dist produzida por npm run build.

1. Instale as dependências com npm ci.
2. Execute npm run build.
3. Execute npm run typecheck e npm run check:seo.
4. Publique dist na hospedagem existente. Netlify e Vercel podem executar o build ao receber atualizações do GitHub, se a integração estiver configurada.

Não reescreva todas as rotas para a página inicial: as páginas agora existem como arquivos e URLs desconhecidas devem responder HTTP 404. As configurações do Netlify, Vercel e Apache estão incluídas.

Confira as rotas /regiao, /blog, /sitemap.xml e /robots.txt depois de publicar. Consulte SEO_ATUALIZACAO.md para os detalhes e as informações que precisam ser confirmadas pela proprietária.

## Destino confirmado nesta revisão

- Repositório: supremapix/Beatriz-Fauth.
- Projeto Vercel: beatriz-fauth.
- Domínio verificado do projeto: www.beatrizfauthpsicologa.com.br.
- Projeto mantém proteção SSO nos endereços Vercel, mas exclui domínios personalizados. Não alterar essa proteção para contornar acesso.
- Atualizar `main` pode disparar publicação automática. Aguardar autorização antes de enviar/mesclar alterações.

Após publicar: verificar o SHA exato no Vercel, a página inicial, `/temas`, um guia, `/contato`, `/sitemap.xml`, `/robots.txt`, a imagem OG, os favicons e HTTP 404 em URL inexistente. Não afirmar que foi publicado apenas porque o push funcionou.
