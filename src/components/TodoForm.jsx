import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-10 px-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-2 rounded-lg"
        placeholder="Enter some task"
      />
      <button type="submit" className="btn btn-ghost ml-2 bg-blue-400">
        Add Task
      </button>
    </form>
  );
};
export { TodoForm };
