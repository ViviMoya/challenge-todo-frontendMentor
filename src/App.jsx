import CrossIcon from "./assets/images/components/icons/CrossIcons";
import MoonIcon from "./assets/images/components/icons/MoonIcon";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-[url('src/assets/images/bg-mobileLight.jpg')] bg-no-repeat bg-contain bg-gray-300">
              
               {/*Header*/}
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="uppercase text-white text-2xl font-bold tracking-[0.3em]">
                            todo
                        </h1>
                        <button>
                            <MoonIcon />
                        </button>
                    </div>
                </header>

                <main className="container mx-auto px-4 mt-6">
                    {/*ToDo CREATE */}
                    <form className=" flex gap-4 bg-white rounded-md overflow-hidden py-4 items-center px-4">
                        <span className="inline-block rounded-full border-2 h-5 w-5"></span>
                        <input
                            className="w-full text-gray-500 outline-none"
                            type="text"
                            placeholder="Crear una nueva tarea"
                        />
                    </form>

                    {/*TodoList (toDoItem) toDoUpdate & todoDelete */}
                    <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
                        <article className="flex gap-4 border-b py-4 border-b-gray-400 px-4">
                            <button className="inline-block rounded-full border-2 h-5 w-5"></button>
                            <p className="grow text-gray-600">
                                Complete online Javascript
                            </p>
                            <button className="">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 border-b py-4 border-b-gray-400 px-4">
                            <button className="inline-block rounded-full border-2 h-5 w-5"></button>
                            <p className="grow text-gray-600">
                                Complete online Javascript
                            </p>
                            <button className="">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 border-b py-4 border-b-gray-400 px-4">
                            <button className="inline-block rounded-full border-2 h-5 w-5"></button>
                            <p className="grow text-gray-600">
                                Complete online Javascript
                            </p>
                            <button className="">
                                <CrossIcon />
                            </button>
                        </article>
                    </div>

                    {/*todoComputed (calculos de todo no completados)*/}
                    <section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
                        {" "}
                        <span className="text-gray-400 ">5 item left</span>
                        <button className="text-gray-400 ">
                            clear complete
                        </button>
                    </section>

                    {/*todoFilter */}
                    <section className="container mx-auto mt-8 rounded-b-md">
                        <div className=" bg-white rounded-md p-4 flex justify-center gap-4">
                            <button className="text-blue-500">all</button>
                            <button className="hover:text-blue-500">
                                active
                            </button>
                            <button className="hover:text-blue-500">
                                complete
                            </button>
                        </div>
                    </section>
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
