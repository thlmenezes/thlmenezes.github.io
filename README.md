# Blog Pessoal

Esse projeto hospeda o código referente ao meu [blog](https://thlmenezes.github.io), utilizando [Astro](https://astro.build/), o [template de Maxi Ferreira](https://github.com/Charca/astro-blog-template#readme) e cria miniaturas dos links para cada página usando [astro-social-images](https://github.com/Princesseuh/astro-social-images#readme)

## FAQ

### Como funciona o modo {escuro, claro}?

Configure o seu navegador/dispositivo e o site responderá de acordo.

### Novos Posts

```plaintext
/src/data/blog-posts
├── post1.md
└── post2.md
```

### Extensões VSCode ?

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)

#### Revisão de Textos

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Dicionário pt-BR](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian)
- [Markdown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [LanguageTool Linter](https://marketplace.visualstudio.com/items?itemName=davidlday.languagetool-linter)
  - requer API rodando, script docker disponível em [lang-tool-server](./scripts/lang-tool-server)

#### Extras

- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

## 🧞 Comandos

Todos os comandos são executados da raiz do projeto, utilizando um terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Instalar dependências                        |
| `npm run dev`     | Inicia servidor local dev em `localhost:3030`|
| `npm run build`   | Build do site de produção em `./dist/`       |
| `npm run preview` | Preview da build localmente, antes do deploy |
