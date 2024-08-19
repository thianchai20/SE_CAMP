import { Link, useNavigate, useParams } from "react-router-dom";
import { Todo } from "../types/todo";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useTodoStore } from "../store/todoStore";

const Edit = () => {
    const { register, handleSubmit, setValue } = useForm<Todo>();
    const { editTodos, todos} = useTodoStore();
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        const todo = todos.find((todo) => todo.id === Number(id));
        if (todo) {
            setValue("id", todo.id);
            setValue("label", todo.label);
            setValue("description", todo.description);
            setValue("status", todo.status);
        }
    }, [id, setValue, todos]);

    const submitData = (data: Todo) => {
        editTodos(data); 
        navigate("/");
    };

    return (
        <div>
            <h1 className="text-center text-2xl text-white text-4xl font-bold">EDIT TODO</h1>
            <form onSubmit={handleSubmit(submitData)}>
                <label className="input input-bordered flex items-center gap-2 my-2 bg-white text-black">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Label"
                        {...register("label")}
                    />
                </label>
                <select id="" className="w-full p-2 bg-transparent border border-white rounded-lg my-2 bg-white text-black" {...register("status")}>
                    <option value="">Select Your Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <textarea
                    className="textarea textarea-bordered w-full my-2 bg-white text-black"
                    placeholder="description"
                    {...register("description")}
                ></textarea>

                <div className="flex justify-between">
                    <Link to="/">
                        <button className="btn block mt-4 text-xl" type="button">
                            Back
                        </button>
                    </Link>
                    <button className="btn block mt-4 bg-red-700 font-bold text-white text-xl" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;