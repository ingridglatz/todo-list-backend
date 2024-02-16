import { Request, Response } from 'express';
import { TodoService } from '../services/todo-service';

export class TodoController {
  private readonly todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  async list(request: Request, response: Response) {
    const todos = await this.todoService.list();
    response.json(todos);
  }

  async getUnique(request: Request, response: Response) {
    const { id } = request.params;
    const todo = await this.todoService.getUnique(Number(id));

    if (!todo) {
      return response.status(404).json({ message: 'Todo not found' });
    }

    response.json(todo);
  }

  async create(request: Request, response: Response) {
    const { title } = request.body;
    const todo = await this.todoService.create(title);
    response.status(201).json(todo);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const todo = await this.todoService.delete(Number(id));

    if (!todo) {
      return response.status(404).json({ message: 'Todo not found' });
    }

    response.status(204).send();
  }

  async update(request: Request, response: Response) {
    const { title, completed } = request.body;
    const { id } = request.params;
    let todo = await this.todoService.update(Number(id), title, completed);

    if (!todo) {
      return response.status(404).json({ message: 'Todo not found' });
    }

    response.json(todo);
  }
}
