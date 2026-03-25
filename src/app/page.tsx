import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default async function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
          <TodoForm />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Todos</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
