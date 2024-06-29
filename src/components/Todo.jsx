import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex flex-row mt-2">
      <p className="mx-2 h-10 flex items-center text-lg">{task.task}</p>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
export { Todo };
