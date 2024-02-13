<p align="center">
  <img src="https://camo.githubusercontent.com/a4e71a0942263821f4cb9213b2808af909e46967d9ed3ccee6e7e122f276efd6/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d74616c2d72657669766f2d726567756c61722d74616c2d72657669766f2f39362f65787465726e616c2d726561646d652d69732d612d656173792d746f2d6275696c642d612d646576656c6f7065722d6875622d746861742d6164617074732d746f2d7468652d757365722d6c6f676f2d726567756c61722d74616c2d72657669766f2e706e67" width="100" />
</p>
<p align="center">
    <h1 align="center">React Exercício 04</h1>
</p>
<p align="center">
    <em>Exercício para a disciplina de Frameworks de FrontEnd - React do curso de Desenvolvimento Web Front-End - PUC Minas</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/camilarozendo/react-ex04?style=default&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/camilarozendo/react-ex04?style=default&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/camilarozendo/react-ex04?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/camilarozendo/react-ex04?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<hr>

## 🔗 Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running react-ex04](#-running-react-ex04)
> - [ Contributing](#-contributing)
> - [ License](#-license)

---

## 📍 Overview

O projeto consiste em uma aplicação web para visualização de filmes populares e favoritos, utilizando a API do The Movie Database (TMDb). Ele é dividido em vários componentes e módulos para melhor organização e manutenção do código. A aplicação é estruturada utilizando React.js, Redux para gerenciamento de estado e React Router para roteamento. Ela consiste em uma página principal que lista filmes populares e uma página de detalhes para exibir informações específicas de cada filme.

---

## 🔮 Features

#### Roteamento:

- Utiliza o *React Router* para gerenciar o roteamento da aplicação, permitindo a navegação entre diferentes páginas.

#### Redux para Gerenciamento de Estado:

- Utiliza o *Redux* para gerenciar o estado da aplicação de forma centralizada. O arquivo `store.js` configura a store do Redux, combinando os reducers necessários.

#### Módulos Config, Favorites e Movies:

- **Config**: Contém configurações globais da aplicação, como a configuração do cliente HTTP (http.js), rotas (routes.js) e store Redux (store.js).
- **Favorites**: Gerencia o estado dos filmes favoritos do usuário. O arquivo favoritos.js define o slice do Redux para manipular o estado dos favoritos e selectFavorites.js fornece seletores para acessar os favoritos.
- **Movies**: Lida com a exibição e detalhes dos filmes populares. Utiliza um serviço (MoviesService.js) para fazer requisições à API de filmes e exibir os resultados. O componente Movie.js renderiza os detalhes de um filme individual, permitindo que o usuário adicione ou remova o filme dos favoritos.

#### Componentes Reutilizáveis:

- Os componentes Header.js, LoadingScreen.js e MainMenu.js são reutilizáveis em diferentes partes da aplicação para manter uma interface consistente e uma experiência de usuário fluida.

#### Lazy Loading:

- Utiliza React.lazy() para carregar os componentes de forma assíncrona, melhorando o desempenho da aplicação ao dividir o código em chunks menores que são carregados sob demanda.

#### Integração com API:

- Utiliza a API do TMDB (The Movie Database) para obter informações sobre filmes populares e detalhes de filmes específicos.

#### Interatividade com o Usuário:

- Permite que o usuário adicione ou remova filmes da lista de favoritos, fornecendo uma experiência personalizada.

---

## 🧩 Repository Structure

```sh

└── react-ex04/
   ├── package-lock.json
   ├── package.json
   ├── public/
   │   ├── index.html
   │   ├── logo.png
   │   └── manifest.json
   └── src/
       ├── components/
       │   ├── Header.js
       │   ├── LoadingScreen.js
       │   └── MainMenu.js
       ├── modules/
       │   ├── config/
       │   │   ├── http.js
       │   │   ├── routes.js
       │   │   └── store.js
       │   ├── favorites/
       │   │   ├── state/
       │   │   │   ├── selectors/
       │   │   │   │   └── selectFavorites.js
       │   │   │   └── slices/
       │   │   └── views/
       │   │       └── Favoritos.js
       │   └── movies/
       │       ├── api/
       │       │   └── MoviesService.js
       │       ├── components/movie/
       │       │   └── Movie.js
       │       ├── hooks/
       │       │   ├── useMoovie.js
       │       │   └── useMoovies.js
       │       └── views/
       │           ├── MovieDetail.js
       │           └── Movies.js
       ├── App.js
       ├── index.js
       ├── logo.svg
       ├── reportWebVitals.js
       ├── setupTests.js
       └── styles.css

```


---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* Node.js

### ⚙️ Installation

1. Clone the pucminas.exercicio2.node repository:

```sh
git clone https://github.com/camilarozendo/react-ex04
```

2. Change to the project directory:

```sh
cd react-ex04
```

3. Install the dependencies:

```sh
npm install
```

### 👩‍💻 Running react-ex04

Use the following command to run react-ex04:

```sh
npm start
```

---


## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/camilarozendo/react-ex04/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/camilarozendo/react-ex04/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/camilarozendo/react-ex04/issues)**: Submit bugs found or log feature requests for Pucminas.exercicio2.node.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/camilarozendo/react-ex04
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

MIT License

Copyright (c) [2023] [Camila Rozendo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[**Return**](#-quick-links)

---
