import { useEffect, useState } from "react"
import Task from "./components/Task"
import ToDoContext from "./context/ToDoContext";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addToDo = (todo)=>{
    setTodos((prevTodos) => [...prevTodos, todo]);
    setText("");
  }

  const deleteToDo = (id)=>{
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => id!==prevTodo.id));
  }

  const updateToDo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => id===prevTodo.id ? todo : prevTodo));
  }

  return (
    <>
      <ToDoContext.Provider value={{ todos, addToDo, deleteToDo, updateToDo }}>
        <div className="w-screen h-screen bg-slate-900 flex items-center flex-col">
          <div className="w-1/3 h-12 bg-slate-50 flex justify-center items-center mt-10 rounded-lg">
            <input 
              type="text" 
              placeholder="Write a task..." 
              className="flex-[2] h-full px-2 outline-none border-none rounded-l-lg"
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
            <button 
              className="flex-1 bg-slate-300 h-full rounded-r-lg hover:bg-slate-400"
              onClick={()=>{
                addToDo({id:uuidv4(), title: text})
              }}
            >
              Add
            </button>
          </div>
          <div className="w-1/3 h-fit">
            {
              todos.map((todo)=>(
                <li key={todo.id} className="list-none">
                  <Task todo={todo}/>
                </li>
              ))
            }
          </div>
        </div>
      </ToDoContext.Provider>
    </>
  )
}

export default App
