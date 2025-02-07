import { useState } from "react";
import AddTodo from "./COMPONENTS/AddTodo";
import Navbar from "./COMPONENTS/Navbar";
import TodoList from "./COMPONENTS/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (newTodo) => {
    const newTodoItem = { id: Date.now().toString(), todo: newTodo, isCompleted: false };
    setTodos([...todos, newTodoItem]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, todo: newText } : todo));
  };

  const handleCheckbox = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  return (
    <>
      <Navbar />
      <div className="bg-red-500 text-white p-4">
        Tailwind is working!
      </div>

      {/* TodoList ko sahi props pass karo */}
      <TodoList 
        todos={todos} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
        handleCheckbox={handleCheckbox} 
      />

      {/* AddTodo ko handleAdd pass karo */}
       {handleAdd} 
    </>
  );
}

export default App;

