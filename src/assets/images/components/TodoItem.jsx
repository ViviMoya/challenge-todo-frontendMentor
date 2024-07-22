import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b py-4 border-b-gray-400 px-4">
            <button
                className={`border-2 h-5 w-5 flex none rounded-full ${
                    completed
                        ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
            >
                {completed && <IconCheck />}
            </button>
            <p className="grow text-gray-600">{title}</p>
            <button className="">
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
