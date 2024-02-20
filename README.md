# Back-end de um To-do-list

Este é um projeto de um back-end de um to-do-list, onde é possível criar, listar, atualizar e deletar tarefas.

## Tecnologias

- Node.js
- Express
- Prisma
- TypeScript
- PostgreSQL
- Jest

## Como rodar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Rode a aplicação com `npm run dev`

## Endpoints

### GET /todos

Retorna todas as tarefas cadastradas

Resposta (200)

```json
[
  {
    "id": 1,
    "title": "Fazer compras",
    "completed": false
  },
  {
    "id": 2,
    "title": "Fazer compras",
    "completed": false
  },
  {
    "id": 4,
    "title": "Fazer compras",
    "completed": false
  },
  {
    "id": 5,
    "title": "Jogar bola",
    "completed": true
  },
  {
    "id": 6,
    "title": "Fazer compras",
    "completed": false
  },
  {
    "id": 7,
    "title": "Fazer compras",
    "completed": false
  }
]
```

### GET /todos/:id

Retorna uma tarefa específica

Resposta (200)

```json
{
  "id": 2,
  "title": "Fazer compras",
  "completed": false
}
```

### POST /todos

Cria uma nova tarefa

Requisição (body)

```json
{
  "title": "Fazer compras"
}
```

Resposta (201)

```json
{
  "id": 7,
  "title": "Fazer compras",
  "completed": false
}
```

### PUT /todos/:id

Atualiza uma tarefa

Requisição (body)

```json
{
  "title": "Estudar",
  "completed": true
}
```

Resposta (200)

```json
{
  "id": 4,
  "title": "Estudar",
  "completed": true
}
```

### DELETE /todos/:id

Deleta uma tarefa. Resposta (204)
