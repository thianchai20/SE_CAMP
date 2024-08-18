
import { Link, useNavigate } from "react-router-dom";
import { Todo } from "../types/todo";
import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todoStore";

const Add = () => {
    const { register, handleSubmit } = useForm<Todo>();
    const {addTodos} = useTodoStore();
    const navigate = useNavigate();

    const submitData = (data: Todo) => {
        addTodos(data);
        navigate("/");
    };

    return (
        <div>
            <h1 className="text-center text-2xl">ADD TODO</h1>
            <form onSubmit={handleSubmit(submitData)}>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Label"
                        {...register("label")}
                    />
                </label>
                <select id="" className="w-full p-2 bg-transparent border border-white rounded-lg my-2" {...register("status")}>
                    <option defaultChecked value="">Select Your Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <textarea
                    className="textarea textarea-bordered w-full my-2"
                    placeholder="description"
                    {...register("description")}
                ></textarea>

                <div className="flex justify-between">
                    <Link to="/">
                        <button className="btn block mt-4" type="submit">
                            Back
                        </button>
                    </Link>
                    <button className="btn block mt-4" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
