# Blog Pessoal

Esse projeto hospeda o código referente ao meu [blog](https://thlmenezes.github.io), utilizando [Astro](https://astro.build/) e o [template de Maxi Ferreira](https://github.com/Charca/astro-blog-template#readme)

## FAQ

### Novos Posts

```plaintext
/src/data/blog-posts
├── post1.md
└── post2.md
```

## Configuração VSCode para revisão de textos

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Dicionário pt-BR](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian)
- [Markdown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [LanguageTool Linter](https://marketplace.visualstudio.com/items?itemName=davidlday.languagetool-linter)
  - requer API rodando, script docker disponível em [lang-tool-server](./scripts/lang-tool-server)

## 🧞 Comandos

Todos os comandos são executados da raiz do projeto, utilizando um terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Instalar dependências                        |
| `npm run dev`     | Inicia servidor local dev em `localhost:3030`|
| `npm run build`   | Build do site de produção em `./dist/`       |
| `npm run preview` | Preview da build localmente, antes do deploy |
