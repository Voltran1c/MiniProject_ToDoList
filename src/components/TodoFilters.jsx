import React from "react";

const TodoFilters = ({ setFilter }) => {
  return (
    <div className="flex justify-center mt-4">
      <button onClick={() => setFilter("all")} className="btn btn-ghost mx-2">
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="btn btn-ghost mx-2"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("uncompleted")}
        className="btn btn-ghost mx-2"
      >
        Uncompleted
      </button>
    </div>
  );
};

export { TodoFilters };
