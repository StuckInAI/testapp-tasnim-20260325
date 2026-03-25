import { getTodos } from '@/lib/repositories/todoRepository';
import { initializeDatabase } from '@/lib/database';
import TodoItem from './TodoItem';

export default async function TodoList() {
  await initializeDatabase();
  const todos = await getTodos();

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos yet. Add one above to get started!
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
