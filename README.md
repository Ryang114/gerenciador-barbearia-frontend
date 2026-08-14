# 💈 Barbearia - Frontend

Interface web para o sistema de gerenciamento de barbearia, desenvolvida em **React**. Este frontend consome a API REST feita em Express (projeto backend separado) e oferece a interface para administrar agendamentos, clientes, barbeiros e serviços.

## 📋 Sobre o projeto

Projeto de estudo/desenvolvimento, criado do zero para aprender React na prática, aplicado a um caso de uso real: um sistema de gerenciamento de barbearia.

## 🚀 Tecnologias utilizadas

- **React** — biblioteca para construção da interface
- **Vite** — ferramenta de build e servidor de desenvolvimento
- **JavaScript (JSX)**
- **CSS**

## 📁 Estrutura do projeto

```
frontend/
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── components/      # Componentes reutilizáveis (Botao, Header, Card, etc.)
│   ├── pages/            # Telas do sistema (Login, Agendamentos, Clientes...)
│   ├── App.jsx           # Componente principal
│   ├── App.css
│   ├── main.jsx           # Ponto de entrada da aplicação
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Telas/funcionalidades previstas

- [ ] Login / Cadastro de usuário
- [ ] Agendamento de horários
- [ ] Cadastro e gerenciamento de clientes
- [ ] Cadastro de barbeiros e serviços
- [ ] Dashboard com relatórios

## 🛠️ Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- npm (já vem junto com o Node.js)

### Passos

```bash
# instalar as dependências
npm install

# rodar o servidor de desenvolvimento
npm run dev
```

Depois, acesse `http://localhost:5173` no navegador.

> ⚠️ Este frontend depende da API backend (Express) rodando separadamente para funcionar por completo.

## 📚 Conceitos de React aplicados no projeto

- Componentes e JSX
- Props (passagem de dados entre componentes)
- Hooks (`useState`, e futuramente `useEffect`)
- Estilização com CSS por componente
- Consumo da API do backend (fetch/axios)
- Organização em `components/` (peças reutilizáveis) e `pages/` (telas)

## 👤 Autor

Desenvolvido por Ryan Gomes Peçanha.

## 📄 Licença

Projeto de uso livre para fins de estudo.
