import { createContext } from "react";

const ToDoContext = createContext({
    todos: [],
    addToDo: (todo)=>{},
    deleteToDo: (id)=>{},
    updateToDo: (id, todo)=>{},
});

export default ToDoContext;