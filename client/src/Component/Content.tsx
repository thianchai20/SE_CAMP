import { useTodoStore } from "../store/todoStore"
import { Link, Navigate, useNavigate } from "react-router-dom";
import Item from "./Item";
import { useEffect } from "react";
import { Todo } from "../types/todo";


const Content = () => {
    const navigate = useNavigate();
    const {getTodos,todos} = useTodoStore();

    useEffect(() => {
        getTodos();
    })
    const handleEdit = (id:Number) => {
        navigate(`/edit/${id}`);
    }

    const {deleteTodos} = useTodoStore();
    const handleDelete = (data : Todo) => {
        deleteTodos(data)
        navigate("/")
    }


  return (
    <div>
        <h1 className="text-left mb-4 text-white text-4xl font-bold">TODOOOO 
        <Link to = "/add"><span className="bg-lime-600  text-base text-white font-bold float-right px-2 py-1 rounded-lg mx-1">Add</span></Link>
        </h1>
        
        <div className="grid grid-cols-4 gap-10 ">
            {todos.map((todo,idx) =>(
                <div className="bg-white border rounded-lg text-black text-2xl font-bold px-4 pt-3 shadow-lg shadow-blue-500/50">
                    <Item key = {idx} id= {todo.id} label= {todo.label} status = {todo.status} description = {todo.description}/>
                    <button onClick={() => handleEdit(todo.id)} className="bg-yellow-400  text-xl  rounded-lg px-2 mr-10 mt-3 mb-1">Edit</button>
                    <button onClick={() => handleDelete(todo)} className="bg-red-700 text-white text-xl  rounded-lg px-2">Delete</button>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Content
