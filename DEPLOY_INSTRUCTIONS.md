# Instruções de Deploy - Correção de Rotas 404

Este guia explica como corrigir o erro 404 ao acessar URLs diretas do site.

## Problema Resolvido

O site agora usa **BrowserRouter** em vez de HashRouter, permitindo URLs limpas (sem #). Para funcionar corretamente, o servidor precisa redirecionar todas as rotas para `index.html`.

## Arquivos de Configuração Incluídos

O projeto agora inclui arquivos de configuração para diferentes plataformas de hospedagem:

### 1. Vercel (Recomendado)
**Arquivo:** `vercel.json`

Este arquivo já está configurado e será automaticamente detectado pelo Vercel.

**Deploy:**
```bash
npm run build
```

Faça commit e push para o repositório conectado ao Vercel. O deploy será automático.

**Teste local:**
```bash
npm run build
npm run preview
```

---

### 2. Netlify
**Arquivos:** `public/_redirects` e `netlify.toml`

Ambos os arquivos estão configurados. O Netlify detectará automaticamente.

**Deploy:**
```bash
npm run build
```

Arraste a pasta `dist` para o dashboard do Netlify ou conecte seu repositório Git.

**Configuração manual (se necessário):**
- Build command: `npm run build`
- Publish directory: `dist`

---

### 3. Servidor Apache (cPanel, Hostinger, etc.)
**Arquivo:** `public/.htaccess`

O arquivo `.htaccess` está na pasta `public` e será copiado automaticamente para `dist` durante o build.

**Deploy:**
1. Execute o build:
```bash
npm run build
```

2. Faça upload de todo o conteúdo da pasta `dist` para o diretório público do servidor (normalmente `public_html` ou `www`)

3. Verifique se o arquivo `.htaccess` foi copiado corretamente para a raiz do site

4. Certifique-se de que o módulo `mod_rewrite` está ativado no Apache

**Verificação:**
- Acesse: `https://seusite.com.br/.htaccess`
- Se o arquivo for baixado ou mostrar erro 403, está correto
- Se mostrar erro 404, o arquivo não foi copiado

---

### 4. Nginx
**Arquivo:** Não incluído (configuração no servidor)

Para Nginx, adicione no arquivo de configuração do site (geralmente em `/etc/nginx/sites-available/`):

```nginx
server {
    listen 80;
    server_name beatrizfauthpsicologa.com.br www.beatrizfauthpsicologa.com.br;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
}
```

Depois reinicie o Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Estrutura de Rotas

O site possui as seguintes rotas principais:

```
/                      → Home
/sobre                 → Sobre Beatriz Fauth
/servicos              → Terapias e Serviços
/contato               → Contato
/blog                  → Blog e Dúvidas
/bairro/:slug          → Páginas de Bairros (17 páginas)
*                      → Página 404 personalizada
```

### Páginas de Bairros (SEO Local):
- `/bairro/centro`
- `/bairro/barra`
- `/bairro/praia-dos-amores`
- `/bairro/nacoes`
- `/bairro/estados`
- `/bairro/pioneiros`
- `/bairro/vila-real`
- `/bairro/nova-esperanca`
- `/bairro/aririba`
- `/bairro/jardim-iate-clube`
- `/bairro/municipios`
- `/bairro/sao-judas-tadeu`
- `/bairro/estaleiro`
- `/bairro/estaleirinho`
- `/bairro/taquaras`
- `/bairro/laranjeiras`
- `/bairro/area-rural`

---

## Teste Local

Para testar se as rotas estão funcionando corretamente:

```bash
# Build do projeto
npm run build

# Servir o build localmente
npm run preview

# Abrir no navegador
# Tente acessar: http://localhost:4173/sobre
# Tente acessar: http://localhost:4173/bairro/centro
# Pressione F5 para recarregar - deve continuar na mesma página
```

---

## Verificação Pós-Deploy

Após fazer o deploy, verifique:

1. **URLs diretas funcionam:**
   - ✅ https://beatrizfauthpsicologa.com.br/sobre
   - ✅ https://beatrizfauthpsicologa.com.br/servicos
   - ✅ https://beatrizfauthpsicologa.com.br/bairro/centro

2. **Reload da página funciona:**
   - Entre em qualquer página interna
   - Pressione F5
   - A página deve permanecer na mesma rota

3. **Botões voltar/avançar funcionam:**
   - Navegue entre páginas
   - Use os botões do navegador
   - Não deve recarregar a página

4. **Página 404 aparece:**
   - Acesse uma URL inexistente
   - Exemplo: https://beatrizfauthpsicologa.com.br/pagina-inexistente
   - Deve mostrar a página 404 personalizada

---

## Troubleshooting

### Erro 404 ainda aparece

**Vercel/Netlify:**
- Verifique se o arquivo de configuração está na raiz do projeto
- Faça commit e push novamente
- Limpe o cache do CDN no dashboard

**Apache:**
- Verifique se o `.htaccess` está na raiz do site
- Confirme que `mod_rewrite` está ativo: `apache2 -M | grep rewrite`
- Verifique permissões do arquivo: `chmod 644 .htaccess`

**Nginx:**
- Verifique a configuração: `sudo nginx -t`
- Veja os logs: `sudo tail -f /var/log/nginx/error.log`

### URLs com # ainda aparecem

Se você tinha bookmarks antigos com `#`, eles continuarão funcionando mas serão redirecionados para URLs limpas automaticamente pelo navegador.

### Assets não carregam

Verifique se o `base` no vite.config.ts está correto. Para domínio raiz, deixe sem configuração ou use `base: '/'`.

---

## Suporte

Se encontrar problemas:

1. Verifique os logs do servidor
2. Use as ferramentas de desenvolvedor do navegador (F12)
3. Verifique a aba Network para ver quais arquivos estão retornando 404
4. Entre em contato com o suporte da hospedagem se o problema persistir

---

## Checklist de Deploy

- [ ] Executar `npm run build`
- [ ] Verificar se a pasta `dist` foi criada
- [ ] Verificar se o arquivo de configuração correto está incluído
- [ ] Fazer upload/deploy dos arquivos
- [ ] Testar URL principal
- [ ] Testar URLs internas diretas
- [ ] Testar reload de página (F5)
- [ ] Testar página 404
- [ ] Verificar SEO (meta tags) com View Source
- [ ] Testar em mobile

---

## Performance e SEO

Os arquivos de configuração incluem:

- ✅ Headers de segurança (X-Frame-Options, CSP)
- ✅ Compressão GZIP (Apache)
- ✅ Cache de assets estáticos
- ✅ URLs limpas (sem #) para melhor SEO
- ✅ Schema.org markup dinâmico por página
- ✅ Meta tags únicas por rota

---

Última atualização: $(date)
