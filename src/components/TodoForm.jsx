import React, { useState } from "react";

const TodoForm = ({ addTodo }) => { // รับค่าไว้ในพารามิเตอร์ addTodo
  const [value, setValue] = useState(""); //เก็บค่าของ input แล้วอัพเดตค่าใน vaule นั้น

  const handleSubmit = (e) => { //เมื่อ submit form จะเรียกใช้ handdleSubmit
    e.preventDefault(); // หยุดการทำงานของ form จากการรีเฟรชหน้าเว็บ
    if (value) {
      addTodo(value);
      setValue(""); // ล้างค่า value ใน input เพื่อเตรียมรับค่า todo ใหม่
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

export { TodoForm };
