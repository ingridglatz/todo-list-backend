import { TodoService } from './todo-service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
    (service as any).todoRepository = {
      list: jest.fn().mockResolvedValue([{ id: 1, title: 'Molho de tomate', completed: false }]),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('list', () => {
    it('should return todos', async () => {
      const result = await service.list();
      expect(result).toEqual([{ id: 1, title: 'Molho de tomate', completed: false }]);
    });
  });
});
