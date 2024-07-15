import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { BorderBeam } from "@/components/magicui/border-beam.tsx";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import WordRotate from "@/components/magicui/word-rotate";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar />
      <div className="box mx-3 md:container md:mx-auto my-6 rounded-xl p-2 min-h-[40vh] md:w-[80vh] relative">
        <BorderBeam />
        <NeonGradientCard >
        
        <div className="inner-div bg-red-400 p-5 min-h-[40vh] rounded-xl">
        <h1 className="font-bold text-center text-2xl gap-5 font-family">
            <span className="text-violet-800">MyPlanner</span> - <span className="text-black-500">Manage your<WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Work", "Meeting" , "Appointments"]}/>at one place</span>
          </h1>
          <div className="addTodo my-5 flex flex-col gap-5">
            <h2 className="text-lg font-bold">Add a Todo</h2>
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-full rounded-full px-5 py-1"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-red-300 hover:bg-blue-950 disabled:bg-green-500 p-2 py-1 text-sm font-bold text-white rounded-md"
            >
              Save
            </button>
          </div>
          <input
            className="my-4"
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
          />{" "}
          Show Finished
          <h2 className="text-lg font-bold">Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div className="m-5">No Todos to display</div>}
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className={"todo flex md:w-1/2 my-3 justify-between"}
                  >
                    <div className="flex gap-5">
                      <input
                        name={item.id}
                        onChange={handleCheckbox}
                        type="checkbox"
                        checked={item.isCompleted}
                      />
                      <div className={item.isCompleted ? "line-through" : ""}>
                        {item.todo}
                      </div>
                    </div>
                    <div className="buttons flex h-full">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        </NeonGradientCard>
      </div>
      
    </>
  );
}

export default App;
