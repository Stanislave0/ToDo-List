import React from 'react';

interface TodoItemProps {
  task: string;
  isCompleted: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, isCompleted, onDelete, onToggle }) => {
  return (
    <div className="card">
      <div className={isCompleted ? 'card-content card-completed' : 'card-content'}>
        <span className={isCompleted ? 'completed' : 'not-completed'}>{task}</span>
      </div>
      <div className="card-action flex-collections">
        <button className="btn" onClick={onToggle}>
          {isCompleted ? 'Activate' : 'Complete'}
        </button>
        <button className="btn red" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;