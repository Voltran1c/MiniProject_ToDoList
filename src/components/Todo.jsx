import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, startEditing, toggleComplete }) => {
  return (
    <div className="flex flex-row mt-2">
      <p
        className={`mx-2 h-10 flex items-center text-lg ${
          task.completed ? "line-through" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faPenSquare}
          onClick={() => startEditing(task.id)}
          className="mx-2"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="mx-2"
        />
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
      </div>
    </div>
  );
};

export { Todo };
