import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Todo = ({ task, deleteTodo, startEditing, toggleComplete }) => {
  return (
    <div className="flex flex-row items-center justify-between p-4 border rounded-lg shadow-md bg-white mt-2">
      <p
        className={`flex-1 text-lg ${
          task.completed ? "line-through text-gray-500" : "text-black"
        }`}
      >
        {task.task}
      </p>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faPenSquare}
          onClick={() => startEditing(task.id)}
          className="mx-2 cursor-pointer text-blue-500 hover:text-blue-700"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="mx-2 cursor-pointer text-red-500 hover:text-red-700"
        />
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="ml-4 form-checkbox h-5 w-5 text-blue-600"
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export { Todo };
