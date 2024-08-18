import { useState } from "react";
import Item from "./Item"
import { useTodoStore } from "../store/todoStore"
import { Link } from "react-router-dom";


const Content = () => {

    const {count,increse,decrease,clear} = useTodoStore();

  return (
    <div>
        <h1 className="text-center mb-4">Todo <Link to = "/add"><span className="float-right border border-white p-1 rounded-lg">Add Todo</span></Link></h1>
        <div className="grid grid-cols-3 gap-10">
        <Item label = "Hello1" status = "Pending" description="lorem yipsum"/>
        <Item label = "Hello1" status = "Pending" description="lorem yipsum"/>
        <Item label = "Hello1" status = "Pending" description="lorem yipsum"/>
        <Item label = "Hello1" status = "Pending" description="lorem yipsum"/>
        <Item label = "Hello1" status = "Pending" description="lorem yipsum"/>
        <Item label = "Hello1" status = "Pending" description="lorem yipsum"/>
        </div>
    </div>
  )
}

export default Content
