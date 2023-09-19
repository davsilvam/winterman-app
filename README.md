# Winterman

<img src="./.github/banner.png" />

## :bookmark: **Sumário**
- [Sobre o Projeto](#snowman-sobre-o-projeto)
- [Visual do Projeto](#art-visual-do-projeto)
   - [Desktop e Telas Maiores](#desktop-e-telas-maiores)
   - [Mobile e Telas Menores](#mobile-e-telas-menores)
- [S.T.A.R.T](#pencil2-start)
   - [S - Situation](#s---situation)
   - [T - Tasks](#t---tasks)
   - [A - Action](#a---action)
   - [R - Results](#r---results)
   - [T - Take Away](#t---take-away)
- [Tecnologias](#wrench-tecnologias)
   - [Construção do site](#construção-do-site)
   - [Estilização](#estilização)
   - [IDE, Versionamento e Deploy](#ide-versionamento-e-deploy)
- [Configurações e Instalação](#rocket-configurações-e-instalação)
     - [Requisitos](#requisitos)
- [Licença](#balance_scale-licença)

## :snowman: **Sobre o Projeto**

O Winterman é um projeto criado com a [Open Weather API](https://openweathermap.org), uma API de clima, e se baseia em um página que traz o clima da cidade que o usuário pesquisar.

<p align="center">
   <a href="https://winterman-app.vercel.app">Veja o projeto completo aqui.</a>
</p>

## :art: **Visual do Projeto**

### _Desktop e Telas Maiores_

<h1 align="center">
    <img src="./.github/desktop.png" style="width: 70%">
</h1>

### _Mobile e Telas Menores_

<h1 align="center">
    <img src="./.github/mobile.png" style="width: 40%;">
</h1>

## :pencil2: **S.T.A.R.T**

### S - Situation

> Fiz esse projeto sozinho, com base em aplicações que havia visto no YouTube que consumiam essa API de clima.

### T - Tasks

> Meu objetivo era implementar uma pesquisa sobre o clima do lugar que o usuário pesquisasse e implementar com outra API que trouxesse algum feedback visual. A parte mais complicada foi integrar as duas API's e sincronizar suas requisições.

### A - Action

> Para que o usuário recebesse o feedback visual, eu implementei a API de mapas da TomTom e fiz com que ela seguisse o que fosse pesquisado pelo usuário.

### R - Results

> O resultado foi a criação de uma interface simples e intuitiva, que trazia as condições do tempo e um mapa de fundo, abrindo espaço para o usuário se aventurar pela aplicação.

### T - Take Away

> Com esse projeto pude usar um gerenciador de estados para compartilhar informações entre meus componentes, além de fazer requisições para múltiplas API's de uma vez.

## :wrench: **Tecnologias**

Tecnologias utilizadas no projeto.

### **Construção do site**

- [TypeScript](https://www.typescriptlang.org)
- [Vue.js](https://vuejs.org)
- [Open Weather API](https://openweathermap.org)
- [TomTom API](https://www.tomtom.com)
- [Vite](https://vitejs.dev/)

### **Estilização**

- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Google Fonts](https://fonts.google.com)

### **IDE, Versionamento e Deploy**

- [Visual Studio Code](https://code.visualstudio.com)
- [Git](https://git-scm.com)
- [GitHub](https://github.com)
- [Vercel](https://vercel.com/)

## :rocket: **Configurações e Instalação**

### Requisitos

- [Node](https://nodejs.org/) e um gerenciador de pacotes, usei [npm](https://www.npmjs.com).
- Extensão [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

Recomendo que veja a [documentação de configuração do Vite](https://vitejs.dev/config/).

```shell
# Clonando o projeto
git clone https://github.com/davsilvam/winterman-app.git

# Instalando as dependências
npm install

# Criar arquivo .env com base no .env.example e preencher o campo com suas chaves das API
VITE_OPEN_WEATHER_API_KEY="<sua-chave-aqui>"
VITE_TOMTOM_API_KEY="<sua-chave-aqui>"

# Compilar e abrir o programa para desenvolvimento
npm run dev

# Compilar e minificar para produção
npm run build
```

## :balance_scale: **Licença**

Esse projeto está sob a [licença MIT](https://github.com/davsilvam/winterman-app/blob/main/LICENSE.md).

---

Feito com 💙 e ☕ por <a href="https://www.linkedin.com/in/davsilvam/">David Silva</a>.

> [Portfólio](https://davidsilvam.vercel.app) &nbsp;&middot;&nbsp;
> GitHub [@davsilvam](https://github.com/davsilvam) &nbsp;&middot;&nbsp;
> Instagram [@davsilvam_](https://www.instagram.com/davsilvam_/)
