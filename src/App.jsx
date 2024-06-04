import TodoCreate from "./assets/images/components/TodoCreate";
import Header from "./assets/images/components/Header";
import TodoList from "./assets/images/components/TodoList";
import TodoComputed from "./assets/images/components/TodoComputed";
import TodoFilter from "./assets/images/components/TodoFilter";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-[url('src/assets/images/bg-mobileLight.jpg')] bg-no-repeat bg-contain bg-gray-300">
                <Header />

                <main className="container mx-auto px-4 mt-6">
                    <TodoCreate />
                    <TodoList />
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

// quede en video 94
