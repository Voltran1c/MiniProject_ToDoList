import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mx-2 h-12 pl-2 rounded-lg"
        placeholder="Update task"
      />
      <button type="submit" className="btn btn-ghost bg-yellow-400">
        Update Task
      </button>
    </form>
  );
};

export { EditTodoForm };
