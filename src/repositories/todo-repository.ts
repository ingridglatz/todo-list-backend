import { PrismaClient } from '@prisma/client';
import { Todo } from '../entities';

export class TodoRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany({ orderBy: { id: 'asc' } });
    return todos.map((t) => new Todo(t));
  }

  async getUnique(id: number): Promise<Todo | null> {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    return todo ? new Todo(todo) : null;
  }

  async create(todo: Todo): Promise<Todo> {
    const created = await this.prisma.todo.create({ data: todo });
    return new Todo(created);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.todo.delete({ where: { id } });
  }

  async update(todo: Todo): Promise<Todo> {
    const updated = await this.prisma.todo.update({ where: { id: todo.id }, data: todo });
    return new Todo(updated);
  }
}
