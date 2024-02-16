import express from 'express';
import { Todo } from './entities';
import { PrismaClient } from '@prisma/client';
import { TodoController } from './controllers/todo-controller';

const app = express();
const port = 3000;

app.use(express.json());

const prisma = new PrismaClient();
const todoController = new TodoController();

//CRUD = Create, Read, Update, Delete
app.get('/todos', todoController.list.bind(todoController));
app.get('/todos/:id', todoController.getUnique.bind(todoController));
app.post('/todos', todoController.create.bind(todoController));
app.delete('/todos/:id', todoController.delete.bind(todoController));
app.put('/todos/:id', todoController.update.bind(todoController));

app.listen(port, () => console.log(`Server is running on port ${port}`));
