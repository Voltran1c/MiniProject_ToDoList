import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-10 px-2">
      <div className="flex">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-2 rounded-l-lg"
          placeholder="Enter some task"
        />
        <button
          type="submit"
          className="btn btn-ghost ml-2 bg-blue-400 rounded-r-lg"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export { TodoForm };
