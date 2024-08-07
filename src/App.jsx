import TodoCreate from "./assets/images/components/TodoCreate";
import Header from "./assets/images/components/Header";
import TodoList from "./assets/images/components/TodoList";
import TodoComputed from "./assets/images/components/TodoComputed";
import TodoFilter from "./assets/images/components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <>
            <div
                className="dark:bg-gray-900 transition-all duration-1000 min-h-screen 
            bg-[url('src/assets/images/bg-mobileLight.jpg')] 
            bg-no-repeat bg-contain bg-gray-300 
            md:bg-[url('src/assets/images/bg-desktop-light.jpg')] 
            dark:md:bg-[url('src/assets/images/bg-desktop-dark.jpg')]
             dark:bg-[url('src/assets/images/bg-mobile-dark.jpg')] 
             "
            >
                <Header />

                <main className="container mx-auto px-4 mt-8 md: max-w-xl">
                    <TodoCreate createTodo={createTodo} />
                    <TodoList
                        todos={filterTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                    <TodoComputed
                        computedItemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />
                    <TodoFilter changeFilter={changeFilter} filter={filter} />
                </main>

                <footer className="text-center mt-6 dark:text-gray-400 transition-all duration-1000">
                    drag and drop reorder list
                </footer>
            </div>
        </>
    );
};

export default App;

// [] |
