import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  task: string;
  isCompleted: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');
  const [statusList, setStatusList] = useState<'All cards' | 'Active cards' | 'Completed cards'>('All cards');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'clear completed'>('all');

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, { task: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };
  const clearCompletedTodos = () => {
    const newTodos = todos.filter(todo => !todo.isCompleted);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Enter your text'

        />
        <button className="btn" onClick={addTodo}>
          Add card
        </button>
        <h5>{statusList}</h5>
      </div>
      <div className='flex-collections'>
        <button className="btn" onClick={() => { setFilter('all'); setStatusList('All cards')} }>
          All
        </button>
        <button className="btn" onClick={() => { setFilter('active'); setStatusList('Active cards')} }>
          Active
        </button>
        <button className="btn" onClick={() => { setFilter('completed'); setStatusList('Completed cards')} }>
          Completed
        </button>
        <button className="btn" onClick={clearCompletedTodos}>
          Clear completed
        </button>
      </div>
      <div>

      </div>
      {
        todos.length > 0 ? filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo.task}
          isCompleted={todo.isCompleted}
          onDelete={() => deleteTodo(index)}
          onToggle={() => toggleTodo(index)}
        />
      )) : <h5>no cards created</h5>}
    </div>
  );
};

export default TodoList;