import { createContext,useContext } from "react";
export const todoContext=createContext({
    todos: [
        {
            id:1,
            todo: "Todo Msg",
            completed : false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
})

export const TodoProvider=todoContext.Provider

export const useTodo=()=>{
    return useContext(todoContext)
}