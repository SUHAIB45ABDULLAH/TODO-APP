import { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    if (todo.length > 3) {
      handleAdd(todo);
      setTodo("");
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-2xl font-bold">Add a Todo</h2>
      <div className="flex mt-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full rounded-full px-5 py-2 border"
        />
        <button
          onClick={handleSubmit}
          disabled={todo.length <= 3}
          className="bg-violet-800 ml-2 px-4 py-2 text-white rounded-full hover:bg-violet-950 disabled:bg-violet-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
