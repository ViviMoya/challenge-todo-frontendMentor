import TodoCreate from "./assets/images/components/TodoCreate";
import Header from "./assets/images/components/Header";
import TodoList from "./assets/images/components/TodoList";
import TodoComputed from "./assets/images/components/TodoComputed";
import TodoFilter from "./assets/images/components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    {
        id: 1,
        title: "ir al gimnasio",
        completed: true,
    },
    {
        id: 2,
        title: "ir a comprar",
        completed: false,
    },
    {
        id: 3,
        title: "estudiar",
        completed: false,
    },
    {
        id: 4,
        title: "preparar comida",
        completed: false,
    },
    {
        id: 5,
        title: "preparar café",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <div className="min-h-screen bg-[url('src/assets/images/bg-mobileLight.jpg')] bg-no-repeat bg-contain bg-gray-300">
                <Header />

                <main className="container mx-auto px-4 mt-8">
                    <TodoCreate createTodo={createTodo}/>
                    <TodoList todos={todos} />
                    <TodoComputed />
                    <TodoFilter />
                </main>

                <footer className="text-center mt-6">
                    drag and drop reorder list
                </footer>
            </div>
        </>
    );
};

export default App;

// quede en video 104
// []
