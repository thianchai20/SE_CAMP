import {Todo} from "../types/todo";

const Item = (props:Todo) => {
  return (
    <div className="border border-white p-2">
      <p>{props.label}</p>
      <p>{props.status}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Item
