# Gerenciador de Barbearia - Frontend

Interface web do projeto **Gerenciador de Agendamentos de Barbearia**.

Este frontend foi criado com React e Vite. Ele e responsavel pelas telas que o usuario vai usar para cadastro, login e, futuramente, agendamentos.

## Tecnologias

- React
- Vite
- React Router DOM
- JavaScript/JSX
- CSS

## Estado Atual

O frontend atualmente possui:

- Roteamento com `react-router-dom`.
- Redirecionamento da rota `/` para `/login`.
- Pagina de login.
- Pagina de cadastro.
- Componentes reutilizaveis iniciais.
- Arquivos CSS separados por pagina/componente.

Rotas atuais do frontend:

```txt
/           -> redireciona para /login
/login      -> tela de login
/cadastro   -> tela de cadastro
```

## Estrutura Principal

```txt
frontend/
  public/
  src/
    assets/
    components/
      Botao.jsx
      botao.css
      footer.jsx
      footer.css
      inputsenha.jsx
      inputsenha.css
    pages/
      cadastro.jsx
      cadastro.css
      login.jsx
      login.css
    App.jsx
    App.css
    main.jsx
    index.css
  package.json
  vite.config.js
```

## Como Rodar

Abra um terminal dentro da pasta `frontend`.

Instale as dependencias, se ainda nao tiver instalado:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse no navegador o endereco mostrado no terminal. Normalmente sera:

```txt
http://localhost:5173
```

## Backend Necessario

Para as telas de cadastro e login funcionarem completamente, o backend precisa estar rodando em outro terminal:

```txt
http://localhost:3000
```

Rotas do backend usadas ou planejadas para este frontend:

```txt
POST /cadastro
POST /login
```

## Como O App Esta Organizado

O arquivo `App.jsx` controla as rotas principais:

```jsx
<Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/cadastro" element={<Cadastro />} />
</Routes>
```

As telas maiores ficam em `src/pages`.

Os componentes menores e reutilizaveis ficam em `src/components`.

## Conceitos De React Praticados

- Componentes
- Props
- Paginas separadas
- CSS por componente/pagina
- Rotas com React Router
- Redirecionamento com `Navigate`

## Proximos Passos

- Conectar a tela de cadastro com `POST /cadastro`.
- Conectar a tela de login com `POST /login`.
- Mostrar mensagens de erro e sucesso para o usuario.
- Criar uma pagina apos o login, como dashboard ou agendamentos.
- Criar fluxo de agendamento no frontend.
- Melhorar padronizacao dos nomes dos componentes.

## Autor

Desenvolvido por Ryan Gomes Pecanha como projeto de estudo full stack.
