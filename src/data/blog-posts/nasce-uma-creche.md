---
title: O nascimento da Creche
publishDate: 20 Ago 2022
description: O que é? Porque o nome? Para quê?
---

## Era uma noite escura e tempestuosa...

Em março de 2020, fui alocado na equipe de um aplicativo React Native, escrito em Javascript e baseado em uma API já construída; o aplicativo já havia sido iniciado, mas depois de algumas atualizações e excelente trabalho de meu colega, virou um projeto [Expo](https://expo.dev/) atualizado com duas pastas de código legado, escritas utilizando classes e que ninguém queria mexer segundo o princípio “está funcionando, ninguém toca se não explode”.

<div class="tenor-gif-embed" data-postid="17362021" data-share-method="host" data-aspect-ratio="1.92771" data-width="100%"><a href="https://tenor.com/view/jurassic-park-iii-nobody-move-a-muscle-alan-grant-dont-move-a-muscle-nobody-move-gif-17362021">Jurassic Park Iii Nobody Move A Muscle GIF</a>from <a href="https://tenor.com/search/jurassic+park+iii-gifs">Jurassic Park Iii GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Em outubro de 2020, me tornei o gerente desse mesmo projeto,  mesmo com pouca ou nenhuma experiência prévia em gestão de equipes, comunicação com cliente e planejamento de metas para projetos de software, assumi a gestão com a saída de minha antecessora. A extensão das responsabilidades do cargo ao qual me refiro como gerente é tópico para discussão outro dia, o foco de meu artigo hoje é descrever os desafios que surgiram durante essa trajetória e ferramentas que me auxiliaram no processo, começando pela substituição quase completa da minha equipe de balanceado nível de experiência por recém-introduzidos ao mundo do desenvolvimento profissional.

## E agora?

Passado o estado de negação inicial, o primeiro desafio era: como preservar a qualidade do código produzido por cada entrega com uma equipe com muito menos experiência? Primeira medida adotada foi uma postura de ditador benevolente, conhecida em alguns projetos.

<div class="tenor-gif-embed" data-postid="16321332" data-share-method="host" data-aspect-ratio="1.83908" data-width="100%"><a href="https://tenor.com/view/i-am-the-law-law-judge-dredd-sylvester-stallone-stallone-gif-16321332">I Am The Law Law GIF</a>from <a href="https://tenor.com/search/i+am+the+law-gifs">I Am The Law GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Mas rapidamente essa postura se mostrou ineficiente, os principais problemas foram:

- Longas horas: passei a pessoalmente verificar 100% do código submetido à produção, logo minha carga de trabalho foi multiplicada pelo número de desenvolvedores da equipe;
- Corrida contra o tempo: caso demorasse a dar feedbacks em uma tarefa relevante para a entrega da semana, possivelmente eu me tornaria responsável por completar as tarefas que separei para mim e as que não conseguiria receber respostas a tempo dos desenvolvedores;
- Documentação inconsistente: cada qual fazia commits e documentava código à sua maneira, escrevendo códigos autorais e, aumentava o trabalho de revisão por ter que "entrar na mente" de quem escreveu.

O fluxo de trabalho podia ser descrito nos passos:

```markdown
1. Gerente delega tarefa a desenvolvedor;
2. Desenvolvedor escreve código;
3. Desenvolvedor faz commit das suas modificações;
4. Desenvolvedor sincroniza suas modificações com o repositório remoto;
5. Desenvolvedor abre Pull Request;
6. Desenvolvedor requisita revisão do gerente.
```

Esse fluxo de trabalho acabou criando um ambiente em que havia grande dependência dos meus feedbacks, às vezes com códigos que funcionavam parcialmente, famoso "conserta um lado e quebra o outro". Então, busquei formas de aumentar os feedbacks, especialmente das partes "automatizáveis", diminuindo o tempo entre a escrita do código "funcionando" e receber uma resposta de revisão, utilizando automações e definindo padrões a serem seguidos, porque quanto menor esse tempo, mais forte a associação de causa e consequência, se formos entrar no campo de estudos de metodologias de ensino.

## Filtrando Fiapos

<div class="tenor-gif-embed" data-postid="11524281" data-share-method="host" data-aspect-ratio="0.8" data-width="100%" data-height="320px"><a href="https://tenor.com/view/fishing-over-fishing-fishing-skill-fish-salmon-gif-11524281">Fishing Over Fishing GIF</a>from <a href="https://tenor.com/search/fishing-gifs">Fishing GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

O momento de quebra da inércia é o mais memorável do processo; o primeiro problema que resolvi atacar foi em relação aos códigos autorais, <s>forçando</s> estabelecendo um formato único de escrita.

### [Prettier](https://prettier.io/)

O Prettier é um formatador de código opinado, suas configurações padrões já trazem um formato que cumpre o objetivo que buscava, contudo, ele permite modificar suas [regras](https://prettier.io/docs/en/options.html) através de um [arquivo de configuração](https://prettier.io/docs/en/configuration.html). Também instrui aos desenvolvedores utilizarem a extensão do Prettier para seu editor de código preferido, para que durante a escrita do código ele já fosse sendo formatado a cada salvamento do arquivo.

<details><summary>Configuração VSCode</summary>

[Extensão VSCode Prettier, de Esben Petersen @ Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```json
/* settings.json */
{
  // Configura o comportamento quando editando arquivos javascript
  "[javascript]": {
    // Formatador Padrão
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    // Formatar arquivos ao salvar
    "editor.formatOnSave": true
  },
}
```

</details>

Mas, apesar de padronizado, ainda havia uma forte dependência na capacidade de os desenvolvedores e eu detectarmos erros que impediriam a execução do código. Descobri haver a necessidade de um [*linter*](https://en.wikipedia.org/wiki/Lint_(software)), como diz a própria documentação do Prettier, em tradução livre, "use o Prettier para formatação e *linters* para capturar *bugs*!".

> O termo *lint* veio da indústria téxtil, se referindo aos pequenos pedaços de tecido que saem nas lavagens e secagens da roupa, a ideia é que os *linters* atuassem para o mundo de *software* como um filtro de *bugs*, semelhante às máquinas filtrando fiapos.

### [ESLint](https://eslint.org/)

Através de análise estática do código é possível detectar erros que impediriam sua execução ou, em configurações mais avançadas, avaliar complexidade e ortografia; o Prettier possui documentação sobre [integração com *linters*](https://prettier.io/docs/en/integrating-with-linters.html), permitindo que não mais precisemos invocar as 2 ferramentas, somente o ESLint.

> Eu configurei meu editor de texto para salvar automaticamente a cada 3 segundos ocioso e **Ctrl+S** como atalho do formatador de código

<details><summary>Configuração VSCode</summary>

[Extensão VSCode ESLint, de Dirk Bäumer @ Microsoft](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

```json
/* settings.json */
{
  // Habilita ESLint como Formatador do VSCode
  "eslint.format.enable": true,
  // Lista de linguagens a serem validadas
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ],
  // Configura o comportamento quando editando arquivos javascript
  "[javascript]": {
    // Formatador Padrão
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    // Formatar arquivos ao salvar
    "editor.formatOnSave": true
    // Ações executadas ao salvar
    "editor.codeActionsOnSave": {
      // Executar todos os consertos automáticos do ESLint
      "source.fixAll.eslint": true
    },
  },
}
```
</details>

Com isso, havia se estabelecido a primeira camada de feedbacks automatizados, mas só seriam eficazes caso os desenvolvedores tivessem a iniciativa de configurar seus ambientes com as extensões sugeridas ou tivessem a disciplina de executar as ferramentas manualmente; confiante na preguiça inerente ao engenheiro de software, resolvi ir mais fundo.

## Todos usamos Git !!

Mesmo os mais indisciplinados, eventualmente haviam de fazer um commit, push e pull request para submeter suas alterações, então resolvi fazer uso desses eventos como gatilhos das automações, <s>forçando</s> induzindo a aplicação dos padrões estabelecidos.

### 🐶 [Husky](https://typicode.github.io/husky/#/)

<div class="tenor-gif-embed" data-postid="16224506" data-share-method="host" data-aspect-ratio="1.00629" data-width="100%"><a href="https://tenor.com/view/cute-dog-ears-pet-gif-16224506">Cute Dog GIF</a>from <a href="https://tenor.com/search/cute-gifs">Cute GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

> Quem é um bom garoto? Quem conseguiria te ignorar?

O husky chegou para ser o cão de guarda, farejador de bugs, impedindo que os desenvolvedores ignorem as regras e mandem suas atualizações sem validar antes em ambiente local, executando as validações configuradas nas seções anteriores seguindo os eventos do git. Ele também modifica o caminho padrão dos git hooks para uma nova pasta que pode compor a sua base de código, facilitando o uso e manutenção dos scripts sem grandes preocupações de configuração por parte dos contribuidores.

<details><summary>O que são git hooks?</summary>

Scripts acionados quando ações importantes acontecem.

```bash
$ git commit
$ git push
```

</details>

<details><summary>Como ele faz isso?</summary>

Segundo a [documentação dos Git Hooks](https://git-scm.com/book/pt-br/v2/Customizing-Git-Git-Hooks), em tradução livre

> Para habilitar um hook script, ponha um arquivo no subdiretório .git/hooks o qual está nomeado apropriadamente (sem extensões) e é executável.

E o caminho que esses comandos se encontram pode ser configurado, a documentação pode ser traduzida livremente da seguinte forma

```bash
git config core.hooksPath <new-path>
core.hooksPath
    Por padrão, Git buscará por seus hooks no diretório
    $GIT_DIR/hooks. Configurando para um caminho diferente, ex.
    /etc/git/hooks, e Git vai tentar encontrar seus hooks nesse
    diretório, ex. /etc/git/hooks/pre-receive ao invés de
    $GIT_DIR/hooks/pre-receive
```
</details>

Contudo, para uma adesão incremental de padrões de projeto, o ideal é validar e apresentar erros dos arquivos que estão sendo modificados no commit.

### 🚫💩 [LintStaged](https://github.com/okonet/lint-staged#readme)

Uma ferramenta muito poderosa, permitindo não só a seleção dos arquivos modificados no commit, como:

- executar validações diferentes dependendo da extensão ou nome do arquivo, utilizando expressões regulares;
- validação de arquivos parcialmente em stage, ou seja, quando existem mais modificações no arquivo que não foram selecionadas no commit elas são empilhadas, as validações são executadas e as modificações são recuperadas automaticamente.

<details><summary>Configuração</summary>

```json
// .lintstagedrc.json
{
  "*.js": "npx eslint --fix",
}
```

```bash
npx husky add .husky/pre-commit 'npx lint-staged'
```
</details>

Agora temos garantia de um histórico com código bem formatado, mas o histórico é legível? Observar o log do git seria simples e traria informações úteis? Essa é a próxima pergunta que busquei respostas.

> A guerra contra o `git commit -m "consertei"`

## Padrões de Commit

Assim que busquei o assunto, encontrei o [guia de contribuição do Angular](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit), apesar do foco em geração automatizada de registro das mudanças entre versões, vi que ali havia um formato que poderíamos experimentar seguir. Mas, como sabemos da confiável e constante preguiça inerente ao engenheiro de software, especialmente em situações de pressão, eu sabia que as mensagens de commit poderiam ser alvo do maior número de desculpas: "é urgente...", "depois arrumo", "foram mudanças triviais".

> Quantas vezes vc já revisou mensagens de commits antigas, especialmente depois que foram enviadas à produção?

Por essas e outras, veio a regra imposta que gerou o maior atrito em adaptação da equipe vigente.

### [Commitlint](https://commitlint.js.org/#/)

<div class="tenor-gif-embed" data-postid="19929780" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/inazuma-eleven-ina11-anime-the-wall-jack-wallside-gif-19929780">Inazuma Eleven Ina11 GIF</a>from <a href="https://tenor.com/search/inazuma+eleven-gifs">Inazuma Eleven GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Configurado para os padrões de commits estabelecidos pela equipe do Angular, e adicionado o git hook `commit-msg`, aqui foi onde houve a maior barreira de adesão por parte dos desenvolvedores; a experiência me levou a buscar formas de simplificar a escrita de commits, como um tutorial.

### [Commitzen](https://commitizen-tools.github.io/commitizen/)

A salvação do onboarding, aqui escolhi não por o git hook por questões de compatibilidade com a interface de commits do VSCode, editor usado pela maioria da equipe; com ambas ferramentas, era possível que os mais inexperientes no formato pudessem ser guiados a escrever uma mensagem que passasse na validação, enquanto os ousados pudessem escrever com velocidade e ser avisados em casos de erros.

> Recentemente descobri o [cz-git](https://cz-git.qbb.sh/), que propõe a unificação da configuração de ambas ferramentas, evitando a duplicação de regras de commits.

Tudo parece bem até o momento correto? Mas ainda existe uma brecha ou caso a ser considerado: e aqueles que por quaisquer motivos desabilitem essas verificações no ambiente local? O ideal seria evitar que o gerente que baixar a branch remota para validar localmente o código e commits. Felizmente, havia uma solução simples o suficiente.

## Todos usamos Github 🤷

Estávamos todos usando o GitHub como plataforma, após uma transição do Gitlab dentro da empresa, e a sintaxe dos [fluxos de trabalho do GitHub](https://docs.github.com/pt/actions/using-workflows/workflow-syntax-for-github-actions) era ainda mais simples que a do Gitlab; também já haviam todas as dependências e comandos para validação prontos em ambiente local.

A transição foi, além de natural, extremamente rápida. Adicionei 2 fluxos de trabalho que passaram a virar pré requisito para meu review

> Se não passar no Lint e Deploy, ainda não está pronto para revisão

### Deploy? Isso é novidade

Por usarmos Expo, o lançamento de atualizações era feito com um comando que demorava em torno de 8 minutos para ser concluído e a atualização estar disponível para os clientes. Quando vi os fluxos de trabalho do GitHub, já visualizei o tempo que eu ganharia colocando deploys automáticos toda vez que o código da `main` era atualizado.

## O que mudou até agora?

```diff
 1. Gerente delega tarefa a desenvolvedor;
-2. Desenvolvedor escreve código;
+2. Desenvolvedor escreve código que é automaticamente formatado e validado;
 3. Desenvolvedor faz commit das suas modificações;
+  3.1 Validações pré commit são executadas;
+  3.2 Desenvolvedor escreve mensagem de commit;
+  3.3 Validação da mensagem de commit executada;
+  3.4 Commit salvo;
 4. Desenvolvedor sincroniza suas modificações com o repositório remoto;
 5. Desenvolvedor abre Pull Request;
-6. Desenvolvedor requisita revisão do gerente.
+6. Aguarda CI/CD com resultados positivos;
+7. Desenvolvedor requisita revisão do gerente.
```

Diferenças sutis, mas tão significativas que trouxeram um aumento de produtividade significativo para os desenvolvedores e diminuíram a carga de trabalho inicial de revisão, ou seja, dá pro gasto por um tempinho.

## Mas porque creche?

O nome veio da ideia de criar um ambiente para que os recém-introduzidos ao mundo da programação profissional pudessem se desenvolver de forma segura, uma ambiente que incentivasse experimentação; e, quando fossem ganhando mais experiência, se tornasse uma rede de segurança, garantindo que o padrão do produto sendo construído não quebraria a barreira de qualidade mínima esperada.

> Acha que faz sentido, dado o que viu até agora?

## FIM?

<div class="tenor-gif-embed" data-postid="8154669" data-share-method="host" data-aspect-ratio="2.43" data-width="100%"><a href="https://tenor.com/view/deadpool-go-home-gif-8154669">Deadpool Go Home GIF</a>from <a href="https://tenor.com/search/deadpool-gifs">Deadpool GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

O panorama do projeto antes dessas ferramentas podia ser descrito como nebuloso: não havia certeza além do que era testado manualmente e a qualidade era garantida pela experiência dos envolvidos. Com o advento de ferramentas e processos, passou a existir uma documentação, garantias da evolução e qualidade do código escrito, criando alguns traumas e feedbacks engraçados no caminho, mas nenhuma história que não combinasse com o nome creche.

Ainda houveram mais dores e melhorias feitas gradualmente a esse fluxo de trabalho, mas espero com esse artigo ter mostrado que não é necessário almejar a implantação da creche 3.0 para se ter um impacto positivo no seu dia a dia.

Busque solucionar as dores que você tem na sua equipe, seja gerente ou desenvolvedor, tome essa iniciativa de buscar por mais qualidade e facilidade no seu trabalho; somente aqueles que vivem a realidade da equipe podem customizar as soluções aos problemas, encare esse material não só uma lista a ser seguida cegamente, mas como um retrato de um processo de solução de problemas.

Vá, pesquise e tire suas próprias conclusões, por hoje é só.