const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className=" container mx-auto mt-8 rounded-b-md">
            <div className="dark:bg-gray-800 transition-all duration-1000 bg-white rounded-md p-4 flex justify-center gap-4">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    all
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
