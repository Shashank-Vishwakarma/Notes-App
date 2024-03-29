import React, { useContext, useState } from "react";
import ToDoContext from "../context/ToDoContext";

function Task({ todo }) {
    const { deleteToDo, updateToDo } = useContext(ToDoContext);
    const [isEditable, setIsEditable] = useState(true);
    const [todoMsg, setTodoMsg] = useState(todo.title);
    const [btn, setBtn] = useState("Edit");

    return (
        <div className="w-full px-2 py-2 bg-slate-400 rounded-md my-2">
            <div className="flex items-center">
                <input
                    type="text"
                    className={
                        `border outline-none border-none px-2 w-full bg-transparent rounded-lg
                        ${!isEditable ? "border bg-white py-2" : ""}`
                    }
                    value={todoMsg}
                    onChange={(e)=>setTodoMsg(e.target.value)}
                    readOnly={isEditable}
                />
                <button 
                    className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={()=>{
                        updateToDo(todo.id, {title: todoMsg, ...todo})
                        setIsEditable(!isEditable)
                        setBtn((prev) => prev==="Edit" ? "Save" : "Edit");
                    }}
                >
                    {btn}
                </button>
                <button 
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>{
                        deleteToDo(todo.id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task;