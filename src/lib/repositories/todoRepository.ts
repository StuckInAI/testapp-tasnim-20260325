import { AppDataSource } from '../database';
import { Todo } from '../entities/Todo';

export const todoRepository = AppDataSource.getRepository(Todo);

export async function createTodo(todoData: Partial<Todo>) {
  const todo = todoRepository.create(todoData);
  return await todoRepository.save(todo);
}

export async function getTodos() {
  return await todoRepository.find({ order: { createdAt: 'DESC' } });
}

export async function getTodoById(id: number) {
  return await todoRepository.findOne({ where: { id } });
}

export async function updateTodo(id: number, updateData: Partial<Todo>) {
  await todoRepository.update(id, updateData);
  return await getTodoById(id);
}

export async function deleteTodo(id: number) {
  const result = await todoRepository.delete(id);
  return result.affected ?? 0;
}
