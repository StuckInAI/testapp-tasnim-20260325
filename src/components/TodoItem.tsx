'use client';

import { Todo } from '@/lib/entities/Todo';
import { updateTodo, deleteTodo } from '@/lib/repositories/todoRepository';
import { initializeDatabase } from '@/lib/database';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

export default function TodoItem({ todo }: { todo: Todo }) {
  async function handleToggle() {
    try {
      await initializeDatabase();
      await updateTodo(todo.id, { completed: !todo.completed });
      window.location.reload();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  }

  async function handleDelete() {
    if (confirm('Are you sure you want to delete this todo?')) {
      try {
        await initializeDatabase();
        await deleteTodo(todo.id);
        window.location.reload();
      } catch (error) {
        console.error('Failed to delete todo:', error);
      }
    }
  }

  return (
    <li className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleToggle}
          className="text-gray-400 hover:text-green-500 transition"
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <div>
          <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className="text-gray-600 text-sm mt-1">{todo.description}</p>
          )}
          <p className="text-gray-400 text-xs mt-2">
            Created: {new Date(todo.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 transition p-2"
        aria-label="Delete todo"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </li>
  );
}
