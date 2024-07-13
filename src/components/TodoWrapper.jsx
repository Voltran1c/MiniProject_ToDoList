import { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { TodoFilters } from "./TodoFilters";

let setId = 0;

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos); // กำหนดค่า todos จาก localStorage เข้าไปใน state ที่ชื่อว่า setTodos
    if (savedTodos.length > 0) {
      // ถ้ามี todos ที่ดึงมาจาก localStorage มีจำนวนมากกว่า 0
      setId = savedTodos[savedTodos.length - 1].id + 1;
    } // set id if not empty
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos, // เอา todos ที่มีอยู่แล้วมา spread ใส่ใน array ใหม่
      { id: setId++, task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos); // อัปเดต state todos ให้เป็น array ใหม่ที่มี Todo ใหม่เพิ่มเข้าไป
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }; // บันทึก todos ใหม่ลงใน localStorage ในรูปแบบของ JSON string

  const toggleComplete = (id) => {
    const newTodos = todos.map(
      (
        todo // ถ้า todo.id = id จะเปลี่ยนสถานะ complete แล้วสร้าง obj ใหม่ และคัดลอกทุกค่าใน todo
      ) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo) // ถ้า todo.id ไม่ใช่ จะคืนค่า todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }; // แปลง newTodos จาก obj ให้เป็น string ก่อนบันทึก

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos); // อัปเดต state todos ให้เป็น newTodos ที่ไม่มี Todo ที่ต้องการลบออกไป
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const startEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map(
      (
        todo // สร้าง array ใหม่โดยวนลูปผ่านทุก Todo ใน todos
      ) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo // ถ้าไม่ใช่ todo.id !== id จะคืนค่า todo เดิมกลับไป
    ); // คัดลอกค่าใน todo และเปลี่ยนค่า isEditing เป็นสถานะตรงข้าม todo.isEditing true หรือ false
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed; // ถ้า filter เท่ากับ completed จะกรอง Todo ที่มี todo.completed เป็น true
    }
    if (filter === "uncompleted") {
      return !todo.completed; // ถ้า filter เท่ากับ uncompleted จะกรอง Todo ที่มี todo.completed เป็น false
    }
    return true; // ถ้าไม่เป็น complete หรือ uncomplete จะคืนค่า true สำหรับทุก Todo
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold mt-10 text-gray-800">To Do List</h1>
      <div className="w-96 bg-white shadow-md rounded-lg overflow-hidden mt-8">
        <TodoForm addTodo={addTodo} />

        <TodoFilters setFilter={setFilter} />

        <ul className="divide-y divide-gray-200">
          {filteredTodos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                startEditing={startEditing}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export { TodoWrapper };
