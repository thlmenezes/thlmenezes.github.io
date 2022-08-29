---
layout: ../../layouts/PostLayout.astro
title: A saga da Creche continua
publishDate: 02 Set 2022
description: O que aconteceu depois do nascimento da creche?
tags: javascript, typescript, padrões de projeto
draft: true
---

## [No último capítulo](#no-último-capítulo)

No [artigo anterior](/blog/nasce-uma-creche) analisamos o processo iterativo de melhoria do processo de revisão da base de código ao automatizar parte dos comentários e revisões corriqueiras, acelerando o aprendizado dos desenvolvedores, com entregas mais frequentes de qualidade igual ou superior ao código construído pela equipe anterior, enquanto preserva a qualidade de vida do gerente.

> Para quem não tinha nada, foi um belo começo.

## ["Ainda não acabou, vem cá, vem"](#ainda-não-acabou-vem-cá-vem)

Mesmo com esse processo recém-criado, temos novos problemas a tratar:

- [Complexidade](#complexidade): Código padronizado ainda pode ser complexo e difícil de entender, com soluções macarrônicas dignas de 1 estrela Michelin.

- [Código duplicado e difícil de usar](#documentação): pouco uso de utilitários já implementados no código por falta de documentação e organização, e dependiam de conhecimento da implementação para serem usados.

- [Validações manuais de usabilidade](#testes): mais de uma vez, mudanças em um componente ou utilitário quebraram silenciosamente uma tela que funcionava em versões anteriores.

- [Gargalo de atualizações](#quebrando-lote-de-atualizações): com a atualização automática do aplicativo de homologação do cliente ao atualizar o ramo principal, os desenvolvedores passaram a tomar consciência do impacto daquilo que escreviam, na forma de grande receio; sobrou para eu testar o lote de modificações antes de enviar para o cliente.

<div class="tenor-gif-embed" data-postid="12035145" data-share-method="host" data-aspect-ratio="1.88024" data-width="100%"><a href="https://tenor.com/view/here-we-go-woody-woodpecker-broom-witch-gif-12035145">E Lá Vamos Nós / Pica Pau / Bruxa / Vassoura / GIF</a>from <a href="https://tenor.com/search/here+we+go-gifs">Here We Go GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

## [Complexidade](#complexidade)

Como já disse um [grande sábio de pequeno cérebro](https://grugbrain.dev/#grug-on-complexity), em tradução livre:

> Complexidade muito, muito ruim

E com razão: a complexidade de código afeta, principalmente, a legibilidade; quanto mais difícil de ser lido, menos o código será auditado, evoluindo para um legado inquestionável, e quando nesse estado surge a hipótese mais assustadora que qualquer desenvolvedor poderia assumir, supõe-se que funciona.

Código foi feito para ser lido, relido e testado, portanto, utilizei minha experiência de amor e ódio com [Rubocop](https://rubocop.org/) como ponto de partida para responder à pergunta.

> Quais eram as validações que mais impactaram a complexidade do meu código?

![Homem negro careca sorrindo enquanto dirige um carro e segura um botão de assento ejetável, cena do filme Velozes e Furiosos 1](/assets/blog/saga-creche-continua/fast-and-furious-ejectable-seat.jpg)

É chegado o momento de compartilhar as dores dessas validações com a nova geração, ao clique de um botão.

| Rubocop (ruby) | ESLint (javascript) |
| ---- | ---- |
|[Metrics/CyclomaticComplexity](https://docs.rubocop.org/rubocop/1.34/cops_metrics.html#metricscyclomaticcomplexity) | [Complexity Rule ESLint](https://eslint.org/docs/latest/rules/complexity)|
|[Metrics/AbcSize](https://docs.rubocop.org/rubocop/1.34/cops_metrics.html#metricsabcsize) | [eslint-plugin-abcsize](https://www.npmjs.com/package/eslint-plugin-abcsize) |

Com poucas modificações a configuração já existente, acabamos de estender as validações de formatação e bugs para validar também o quão complexo o código escrito de fato é. Mas, apesar de menos complexidade facilitar a compreensão, muitas vezes é tão importante quanto a simplicidade em utilizar sem obrigar a compreender a implementação; e assim entramos no território em que documentação se torna um fator determinante na velocidade.

## [Documentação](#documentação)

> Por que documentamos? Porque queremos deixar um legado não odiável no dia seguinte!

Os objetivos que a documentação de um código deve perseguir podem ser divididos em 3 grupos:

1. Intenção: Por qual motivo esse método foi criado? Qual problema ele resolve?
2. Interface: Como interagir com esse método? Quais são os possíveis argumentos, retornos, exceções que podem surgir desse código? Exemplos?
3. Integração: Qual versão foi adicionado? Devo continuar usando (deprecado)?

<div class="tenor-gif-embed" data-postid="7342750" data-share-method="host" data-aspect-ratio="1.77333" data-width="100%"><a href="https://tenor.com/view/typing-fast-jimcarrey-bruce-almighty-emails-gif-7342750">Typing Fast GIF</a>from <a href="https://tenor.com/search/typing-gifs">Typing GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Com nossas metas em mente, podemos começar a trabalhar.

### [JSDoc](#jsdoc)

JSDoc (1999-hoje) estabelece um formato de documentação utilizado até hoje na comunidade Javascript. Com isso não precisamos criar um formato novo de fazer a documentação e ganhamos acesso a ferramentas que podem percorrer nosso código e exportar esses comentários em formatos `html`, `pdf` e outros.

<details>

<summary>Modelo de comentário</summary>

```js
/**
 * Intenção em voz imperativa
 * 
 * Descrição estendida
 * 
 * @example <caption>Legenda</caption>
 * method(args); // => value
 *
 * @param {JStype} name - description
 * 
 * @returns {JStype} description
 */
```

</details>

<details>

<summary>Principais Funcionalidades</summary>

| JSDoc | Significado |
| --- | --- |
| [@throws](https://jsdoc.app/tags-throws.html) | Exceções que podem surgir |
| [@example](https://jsdoc.app/tags-example.html) | Exemplo de uso |
| [@param](https://jsdoc.app/tags-param.html) | Argumentos |
| [@returns](https://jsdoc.app/tags-returns.html) | Retorno |
| [@deprecated](https://jsdoc.app/tags-deprecated.html) | Aviso de funcionalidade deprecada |

Encontre outras funcionalidades em [JSDoc](https://jsdoc.app/index.html)

</details>

<details>

<summary>Leitura Recomendada</summary>

Lendo o conteúdo das 3 páginas trará uma visão inicial bem completa do que é possível documentar e como.

1. [Primeiros Passos](https://jsdoc.app/about-getting-started.html)
1. [@param/@arg/@argument](https://jsdoc.app/tags-param.html)
1. [@type](https://jsdoc.app/tags-type.html)

</details>

Por conta de sua difusão, alguns editores de texto apresentam sugestões baseados nos tipos documentados. Vamos analisar o código abaixo:

```js
/**
 * Cria `gitmojis.json` para uso em commitlint
 *
 * @param {Object} json - O conteúdo json baixado.
 * @param {Object[]} json.gitmojis - O array de conteúdo listado em gitmoji.dev
 * @param {string} json.gitmojis[].emoji - A representação elegante do emoji
 * @param {string} json.gitmojis[].code - O nome do emoji
 * @param {string} json.gitmojis[].description - O significado dentro do gitmoji
 */
```

Acima foi descrito uma função qualquer que recebe um argumento `json` segundo o formato.

![Captura de tela mostrando janela flutuante com documentação da função](/assets/blog/saga-creche-continua/jsdoc-function.png)

E durante a escrita do código ele reconhece a estrutura, apresentando sugestões.

![Captura de tela mostrando janela flutuante com sugestões de código de acordo com a estrutura do argumento `json` definida na documentação](/assets/blog/saga-creche-continua/jsdoc-autocomplete.png)

Contudo, se formos nos inclinar mais para o lado da tipagem do JSDoc, existe uma alternativa mais recente e com uma experiência de desenvolvimento mais simples quando o assunto é descrever tipagem de dados.

### [TypeScript](#typescript)

TypeScript (TS) é uma linguagem fortemente tipada construída com base no JavaScript (JS), tornando a transição da base de código extremamente natural.

Todo código JS faz parte do TS, portanto, em tese se modificarmos todas as extensões de arquivo do projeto tudo deveria funcionar; mas pensando na ideia de adoção incremental podemos ir trocando para os arquivos para TS conforme as tarefas são afetando o código-fonte.

Então, a combinação dos dois fica da seguinte forma

```ts
/**
 * Intenção em voz imperativa
 * 
 * Descrição estendida
 * 
 * @example <caption>Legenda</caption>
 * // => value
 * method(args);
 * 
 * @arg 
 * @deprecated
 */
function soma(esquerda: number, direita: number){
  return esquerda+direita;
}
```

Vamos analisar a documentação resultante do código acima

![Captura de tela mostrando janela flutuante com documentação da função soma](/assets/blog/saga-creche-continua/jsdoc-plus-ts.png)

Note que nós não escrevemos o tipo do retorno da função, ele foi inferido baseado no código e no tipo dos argumentos. Então, o resumo é, utilize cada ferramenta para sua especialidade:

| vs | Intenção | Interface* | Integração |
| :---: | :---: | :---: | :---: |
| JSDoc | X | | X |
| TypeScript | | X | |

*o TypeScript consegue expressar 95% da categoria Interface, contudo pode ser complementado com o JSDoc (ex.: exceções e exemplos)

Bastante teoria, mas a prática também é importante, alguns dizem que até mais importante, encontramos até mesmo frases emblemáticas como, em tradução livre:

> "Código nunca mente, comentários às vezes sim."<br/>
> — Ron Jeffries

Então vemos aqui que precisamos ir mais longe nas validações, além do estático, precisamos adicionar uma etapa dinâmica.

## [Testes](#testes)

Aproveitando a citação de Ron Jeffries, ele é um dos 3 fundadores da metodologia de desenvolvimento de software Programação Extrema (XP, do inglês [_Extreme Programming_](http://www.extremeprogramming.org/)) um processo do desenvolvimento ágil, assunto digno de aprofundamento em artigo separado, mas desse tema irei aproveitar o gancho das opiniões sobre testes descritas no método.

<http://www.extremeprogramming.org/rules.html>

### [Unidade](#unidade)

Code the unit test first. (TDD)
<http://www.extremeprogramming.org/rules/testfirst.html>

All code must have unit tests.
<http://www.extremeprogramming.org/rules/unittests.html>

O risco de simular resultados (_mocks_)

### [Ponta a Ponta](#ponta-a-ponta)

> ["Acceptance tests are run often and the score is published"](http://www.extremeprogramming.org/rules/functionaltests.html)<br/>
> --- The Rules of Extreme Programming: Testing

1. Cypress
2. Playwright
3. Selenium

## [Quebrando lote de atualizações](#quebrando-lote-de-atualizações)

> ["Make frequent small releases"](http://www.extremeprogramming.org/rules/releaseoften.html)<br/>
> --- The Rules of Extreme Programming: Planning

e

> ["Integrate Often"](http://www.extremeprogramming.org/rules/integrateoften.html)<br/>
> --- The Rules of Extreme Programming: Coding

e

> ["Collective Ownership"](http://www.extremeprogramming.org/rules/collective.html)<br/>
> --- The Rules of Extreme Programming: Coding

1. Trunk Based Workflow
2. Changelogs automatizados

## Conclusão

> ["Code must be formatted to agreed coding standards [...] Code that looks the same encourages collective ownership"](http://www.extremeprogramming.org/rules/standards.html)<br/>
> --- The Rules of Extreme Programming: Coding

e

> ["Move people around to avoid serious knowledge loss and coding bottle necks"](http://www.extremeprogramming.org/rules/movepeople.html)<br/>
> --- The Rules of Extreme Programming: Managing
