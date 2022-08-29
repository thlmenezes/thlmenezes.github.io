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

E com razão, a complexidade de código afeta, principalmente, a legibilidade do código. Quanto mais difícil de ser lido, menos o código será auditado, virando um legado inquestionável, e quando nesse estado, todos acreditam que funciona.

Código foi feito para ser lido, relido e testado, portanto, utilizei minha experiência de amor e ódio com [Rubocop](https://rubocop.org/) como ponto de partida para responder à pergunta.

> Quais eram as validações que mais impactaram a complexidade do meu código?

![Homem negro sorrindo dirigindo carro e segurando botão de assento ejetável, cena do filme Velozes e Furiosos 1](/assets/blog/saga-creche-continua/fast-and-furious-ejectable-seat.jpg)

É chegado o momento de compartilhar as dores dessas validações com a nova geração, ao clique de um botão.

| Rubocop (ruby) | ESLint (javascript) |
| ---- | ---- |
|[Metrics/CyclomaticComplexity](https://docs.rubocop.org/rubocop/1.34/cops_metrics.html#metricscyclomaticcomplexity) | [Complexity Rule ESLint](https://eslint.org/docs/latest/rules/complexity)|
|[Metrics/AbcSize](https://docs.rubocop.org/rubocop/1.34/cops_metrics.html#metricsabcsize) | [eslint-plugin-abcsize](https://www.npmjs.com/package/eslint-plugin-abcsize) |

## [Documentação](#documentação)

<div class="tenor-gif-embed" data-postid="7342750" data-share-method="host" data-aspect-ratio="1.77333" data-width="100%"><a href="https://tenor.com/view/typing-fast-jimcarrey-bruce-almighty-emails-gif-7342750">Typing Fast GIF</a>from <a href="https://tenor.com/search/typing-gifs">Typing GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

### [JSDoc](#jsdoc)

### [Typescript](#typescript)

## [Testes](#testes)

### [Unidade](#unidade)

O risco de simular resultados (*mocks*)

### [Ponta a Ponta](#ponta-a-ponta)

1. Cypress
2. Playwright
3. Selenium

## [Quebrando lote de atualizações](#quebrando-lote-de-atualizações)

1. Trunk Based Workflow
2. Changelogs automatizados
