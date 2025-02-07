import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, []);

  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = (todo) => {
    const newTodos = [...todos, { id: crypto.randomUUID(), todo, isCompleted: false }];
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, todo: newText } : item
    );
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
      saveToLS(newTodos);
    }
  };

  const handleCheckbox = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  };

  return (
    <div className="p-5 bg-violet-100 min-h-[80vh] w-full md:w-[35%] mx-auto rounded-xl">
      <h1 className="font-bold text-center text-3xl">iTask - Manage your todos</h1>
      <AddTodo handleAdd={handleAdd} />
      <div className="mt-5">
        <input
          id="show"
          type="checkbox"
          checked={showFinished}
          onChange={() => setShowFinished(!showFinished)}
        />
        <label htmlFor="show" className="ml-2">Show Finished</label>
      </div>
      <h2 className="text-2xl font-bold mt-4">Your Todos</h2>
      {todos.length === 0 ? (
        <p className="m-5">No Todos to display</p>
      ) : (
        todos.map((item) =>
          (showFinished || !item.isCompleted) && (
            <TodoItem
              key={item.id}
              todo={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleCheckbox={handleCheckbox}
            />
          )
        )
      )}
    </div>
  );
};

export default TodoList;
