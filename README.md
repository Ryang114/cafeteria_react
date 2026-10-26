# ☕ Cafeteria React

Site institucional de uma cafeteria, migrado de **HTML/CSS/JavaScript puro** para **React + Vite**, com estilização via **Bootstrap (CDN)**.

Projeto de estudo e portfólio focado em componentização, organização de dados mock e preparação para futura integração com back-end.

---

## 📸 Preview

> Adicione aqui um print da página inicial.
> Exemplo: `![Preview do site](./docs/preview.png)`

---

## 🚀 Tecnologias

- [React](https://react.dev/) (JavaScript / `.jsx`)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/) via CDN (CSS + Bundle JS)
- CSS próprio para ajustes específicos do layout

---

## ✨ Funcionalidades / Seções

- **Navbar** – navegação fixa com links para as seções
- **Hero** – banner de apresentação com chamada para ação
- **Sobre** – história e diferenciais da cafeteria
- **Menu** – cardápio com cards de produtos e filtros por categoria
- **Avaliações** – depoimentos de clientes
- **Endereço** – mapa incorporado (Google Maps)
- **Footer** – informações de contato e rodapé

---

## 📁 Estrutura do projeto

```
Cafeteria-react/
├── public/
│   └── imagens/          # imagens do site
├── src/
│   ├── components/       # Navbar, Hero, About, Menu, Reviews, Address, Footer
│   ├── data/             # dados mock (cardápio, depoimentos)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html            # CDN do Bootstrap configurada aqui
├── package.json
└── vite.config.js
```

> Ajuste os nomes das pastas/arquivos conforme a estrutura final do seu projeto.

---

## 🧠 Decisões de arquitetura

- **Componentização:** cada seção do site é um componente React reutilizável.
- **Dados isolados:** itens do cardápio e depoimentos ficam em arquivos separados em `src/data/`, simulando o retorno de uma API. Isso facilita a futura troca por requisições reais ao back-end.
- **Bootstrap via CDN:** configurado diretamente no `index.html`, sem instalação por `npm`.

---

## ▶️ Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Ryang114/NOME-DO-REPOSITORIO.git

# 2. Entre na pasta do projeto
cd Cafeteria-react

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

### Outros comandos

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera a versão de produção (`dist/`)    |
| `npm run preview` | Visualiza localmente o build de produção |

---

## 🗺️ Próximos passos

- [ ] Finalizar todos os componentes seguindo o mockup desktop (1280px)
- [ ] Tornar o layout totalmente responsivo (mobile e tablet)
- [ ] Implementar filtros do cardápio por categoria
- [ ] Carrinho de compras
- [ ] Integração com back-end (Node.js + Express + MySQL)

---

## 📚 Origem e inspiração

Este projeto foi inspirado no vídeo [**New Project | Building a New Coffee Shop Website**](https://youtu.be/v1jVqO6dx9A), do canal **DevClub | Programação** (Rodolfo Mori), que ensina a criar um site de cafeteria com HTML e CSS.

A versão original foi feita com HTML, CSS e JavaScript puro, seguindo o vídeo. Depois, o projeto foi migrado por mim para React + Vite + Bootstrap, com layout e estrutura adaptados. A migração teve como objetivo praticar:

- componentização e uso de `props`
- renderização de listas com `.map()`
- organização de dados mock
- uso prático de classes utilitárias e componentes do Bootstrap

---

## 👨‍💻 Autor

**Ryan Gomes Peçanha**
Estudante de Análise e Desenvolvimento de Sistemas 

- GitHub: [@Ryang114](https://github.com/Ryang114)