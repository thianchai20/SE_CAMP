import {create} from "zustand"
import { Todo } from "../types/todo"
import axios from "axios"

type TodoStore = {
    todos: Todo[],

    getTodos : () => void
    addTodos : (data : Todo) => void
    editTodos : (data : Todo) => void
    deleteTodos : (id:any) => void
}

export const useTodoStore = create<TodoStore>()((set) => ({
    todos:[],

    getTodos: async() => {
        try{
            const result = await axios.get("http://localhost:3000/todo")
            console.log(result)
            set({todos : result.data})
        }catch(err){
            console.error(err)
        }
    },
    addTodos: async(data) => {
        try{
            await axios.post("http://localhost:3000/todo",data)
            
            const result = await axios.get("http://localhost:3000/todo")
            set({todos : result.data})
        }catch(err){
            console.error(err)
        }
    },
    editTodos: async(data) => {
        try{
            await axios.put("http://localhost:3000/todo",data)
            
            const result = await axios.get("http://localhost:3000/todo")
            set({todos : result.data})
        }catch(err){
            console.error(err)
        }
    },
    deleteTodos: async(data) => {
        try{
            await axios.delete("http://localhost:3000/todo",{data: data})
            
            const result = await axios.get("http://localhost:3000/todo")
            set({todos : result.data})
        }catch(err){
            console.error(err)
        }
    }

}))