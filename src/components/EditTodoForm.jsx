import { useState } from "react";
import PropTypes from "prop-types";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full max-w-md p-2 mb-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
      >
        Update Task
      </button>
    </form>
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export { EditTodoForm };
