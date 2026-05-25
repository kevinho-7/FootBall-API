# Football Scouts API ⚽

<img src="https://flagcdn.com/20x15/us.png" width="25"> [**`English Version`**](./README.md)

> Projeto acadêmico desenvolvido para o curso **CSE341 - Web Services** como parte do meu bacharelado em Desenvolvimento de Software.

Football Scouts API é um serviço web RESTful projetado para ajudar olheiros de futebol a gerenciar dados de jogadores, times, partidas e estatísticas de jogos. O projeto foi desenvolvido como um trabalho universitário com o objetivo de praticar conceitos de desenvolvimento back-end usando Node.js, MongoDB e princípios de API-first design.

A API oferece uma experiência completa de scouting onde os usuários podem gerenciar jogadores, times, partidas e estatísticas de desempenho com autenticação adequada, validação e documentação abrangente da API.

---

## 🚀 Funcionalidades

- Operações CRUD completas para jogadores, times, partidas e estatísticas
- Autenticação GitHub OAuth 2.0
- Rotas protegidas com autorização baseada em sessão
- Validação de dados com schemas Joi
- Integração com banco de dados MongoDB usando Mongoose ODM
- Gerenciamento de relacionamentos (jogadores pertencem a times, partidas conectam times, estatísticas ligam a jogadores)
- Documentação Swagger/OpenAPI
- Testes unitários com Jest e Mockingoose
- Middleware de tratamento de erros
- Configuração CORS

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Passport.js (Estratégia GitHub)

### Validação e Segurança
- Joi (Validação de schemas)
- HTTP-Errors (Tratamento de erros)
- Express Session
- CORS
- Dotenv (Variáveis de ambiente)

### Documentação e Testes
- Swagger UI Express
- Swagger Autogen
- Jest
- Mockingoose

### Ferramentas e Ambiente
- Git & GitHub
- Nodemon
- Render (Deployment)

---

## 📂 Estrutura do Projeto

```text
├── config/
│   ├── corsConfig.js
│   └── passport.js
├── controllers/
│   ├── index.js
│   ├── matches.js
│   ├── players.js
│   ├── stats.js
│   └── teams.js
├── middlewares/
│   ├── auth.js
│   └── error.js
├── models/
│   ├── db.js
│   ├── matches.js
│   ├── players.js
│   ├── stats.js
│   └── teams.js
├── routes/
│   ├── index.js
│   ├── login.js
│   ├── logout.js
│   ├── matches.js
│   ├── players.js
│   ├── stats.js
│   ├── swagger.js
│   ├── teams.js
│   └── auth.js
├── tests/
│   ├── matches.test.js
│   ├── players.test.js
│   ├── stats.test.js
│   └── teams.test.js
├── utils/
│   └── message.js
├── validator/
│   ├── ValSchemas.js
│   └── validator.js
├── app.js
├── swagger.js
├── package.json
└── .env
```
O projeto segue uma arquitetura MVC limpa com clara separação de responsabilidades: rotas lidam com requisições HTTP, controllers contêm a lógica de negócio, models gerenciam interações com o banco de dados, e middlewares tratam preocupações transversais como autenticação e tratamento de erros.

## 📚 Conceitos Praticados

- Design de API RESTful
- Arquitetura MVC
- Autenticação e Autorização com OAuth 2.0
- Gerenciamento de sessão
- Operações CRUD
- Relacionamentos e population em banco de dados
- Validação de requisições
- Middleware de tratamento de erros
- Documentação de API com OpenAPI/Swagger
- Testes unitários com mocking
- Gerenciamento de configurações de ambiente
- Deployment em plataformas cloud

## 🔧 Endpoints da API

### Jogadores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/players` | Buscar todos os jogadores |
| GET | `/players/:id` | Buscar jogador por ID |
| POST | `/players` | Criar novo jogador (autenticado) |
| PUT | `/players/:id` | Atualizar jogador (autenticado) |
| DELETE | `/players/:id` | Deletar jogador (autenticado) |

### Times

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/teams` | Buscar todos os times |
| GET | `/teams/:id` | Buscar time por ID |
| POST | `/teams` | Criar novo time (autenticado) |
| PUT | `/teams/:id` | Atualizar time (autenticado) |
| DELETE | `/teams/:id` | Deletar time (autenticado) |

### Partidas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/matches` | Buscar todas as partidas |
| GET | `/matches/:id` | Buscar partida por ID |
| POST | `/matches` | Criar nova partida (autenticado) |
| PUT | `/matches/:id` | Atualizar partida (autenticado) |
| DELETE | `/matches/:id` | Deletar partida (autenticado) |

### Estatísticas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/stats` | Buscar todas as estatísticas |
| GET | `/stats/:id` | Buscar estatísticas por ID |
| POST | `/stats` | Criar novas estatísticas (autenticado) |
| PUT | `/stats/:id` | Atualizar estatísticas (autenticado) |
| DELETE | `/stats/:id` | Deletar estatísticas (autenticado) |

### Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/login` | Login via GitHub OAuth |
| GET | `/logout` | Logout do usuário |
| GET | `/` | Página de boas-vindas |

## 🎯 Propósito do Projeto

Este projeto foi criado como parte da minha jornada de aprendizado em Desenvolvimento de Software e estudos universitários, com foco na construção de APIs RESTful prontas para produção usando Node.js, Express e MongoDB.

O objetivo principal foi melhorar a experiência prática com desenvolvimento back-end, design de banco de dados, implementação de autenticação e documentação de API.

## 👨‍💻 Autor

Kevin G. Ferreira

