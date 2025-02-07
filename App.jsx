import Navbar from "./COMPONENTS/Navbar";
import TodoItem from "./COMPONENTS/TodoItem";
import TodoList from "./COMPONENTS/TodoList";
import './index.css';



function App() {
  return (
    <>
      <Navbar />
      <div className="bg-red-500 text-white p-4">
  Tailwind is working!
</div>

      <TodoList />
      <TodoItem/>
    </>
  );
}

export default App;

