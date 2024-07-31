/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="dark:bg-gray-800 transition-all duration-1000 flex gap-4 bg-white rounded-md overflow-hidden py-4 items-center px-4"
        >
            <span className="inline-block rounded-full border-2 h-5 w-5"></span>
            <input
                className="dark:bg-gray-800 transition-all duration-1000 w-full text-gray-500 outline-none"
                type="text"
                placeholder="Crear una nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
