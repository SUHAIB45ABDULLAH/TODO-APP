import { useState } from "react";
import PropTypes from "prop-types";  // PropTypes import kiya
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todo, handleEdit, handleDelete, handleCheckbox }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleSave = () => {
    handleEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center my-3 bg-white p-2 rounded shadow">
      <div className="flex gap-4 items-center">
        <input 
          type="checkbox" 
          checked={todo.isCompleted} 
          onChange={() => handleCheckbox(todo.id)} 
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          <span className={todo.isCompleted ? "line-through" : ""}>{todo.todo}</span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="bg-green-700 text-white p-2 rounded">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded">
            <FaEdit />
          </button>
        )}
        <button onClick={() => handleDelete(todo.id)} className="bg-red-500 text-white p-2 rounded">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

// ✅ **PropTypes validation added**
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
};

export default TodoItem;

