import { Todo } from '../entities';
import { TodoRepository } from '../repositories/todo-repository';

export class TodoService {
  private readonly todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async list() {
    const todos = await this.todoRepository.list();
    return todos;
  }

  async getUnique(id: number) {
    const todo = await this.todoRepository.getUnique(id);
    return todo;
  }

  async create(title: string) {
    let todo = new Todo({ title });
    todo = await this.todoRepository.create(todo);
    return todo;
  }

  async delete(id: number) {
    const todo = await this.todoRepository.getUnique(id);

    if (!todo) {
      return null;
    }

    return await this.todoRepository.delete(id);
  }

  async update(id: number, title: string, completed: boolean) {
    let todo = await this.todoRepository.getUnique(id);

    if (!todo) {
      return null;
    }

    todo.title = title;
    todo.completed = completed;

    todo = await this.todoRepository.update(todo);
    return todo;
  }
}
