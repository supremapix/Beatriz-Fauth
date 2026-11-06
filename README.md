# Beatriz Fauth — site institucional

React, TypeScript e Vite, com HTML pré-renderizado para todas as rotas. Não precisa de chave de API, servidor de aplicação ou banco de dados em produção.

## Desenvolvimento

Use Node.js 22 LTS ou compatível.

```sh
npm ci
npm run dev
```

## Verificação e publicação

```sh
npm run check
npm audit
```

A pasta `dist` contém o site pronto. Publique na hospedagem existente apenas com autorização. Consulte `DEPLOY_INSTRUCTIONS.md` e `SUPREMA_ENTREGA.md`.

O formulário somente prepara uma mensagem e oferece um link para abrir o WhatsApp. Não confirma consultas, não recebe pagamentos e não envia dados automaticamente.

## Conteúdo e identidade

- `pages/Pages.tsx`: páginas institucionais e artigos de orientação.
- `pages/Topics.tsx` e `topics-content.json`: temas em debate, FAQs e fontes.
- `constants.ts`: contato, registro informado, perguntas e artigos.
- `seo.ts`: títulos, canonical, schemas e rotas.
- `components/FloatingActions.tsx`: seis redes e quinze textos de compartilhamento.
- `styles.css`: identidade visual responsiva, fontes locais e movimento reduzido.
- `scripts/generate-brand-assets.mjs`: gera OG e ícones a partir dos SVGs nativos. `npm run assets:brand` regenera os arquivos.

A imagem `logo-beatriz.jpeg` é a fotografia existente da profissional. O arquivo antigo `beatriz-profile.jpg` continha um CRP divergente e não é usado. O registro de texto CRP 12/00649 foi mantido conforme orientação do responsável pelo projeto; não representa validação cadastral independente.

## Revisão de leitura e imagens

Consulte `ACESSIBILIDADE_IMAGENS_V2.md` para o escopo e os testes da revisão, `CONTATO_CONTEXTUAL.md` para a seção global e `SERVICOS_ARTES_V2_MANIFEST.json` para a origem das cinco ilustrações. Telefone e CRP precisam ser atualizados em `constants.ts` e nas artes correspondentes se houver mudança.

A revisão mais recente está em `REVISAO_LEITURA_IDOSOS_V3.md`: texto principal de 20 px, contraste reforçado e contato em primeiro lugar. Substitui os tamanhos e a ordem de leitura descritos no relatório V2.
