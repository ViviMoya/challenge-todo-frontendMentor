const TodoCreate = () => {
	return(
		<form className=" flex gap-4 bg-white rounded-md overflow-hidden py-4 items-center px-4">
		<span className="inline-block rounded-full border-2 h-5 w-5"></span>
		<input
			className="w-full text-gray-500 outline-none"
			type="text"
			placeholder="Crear una nueva tarea"
		/>
	</form>

	)
}

export default TodoCreate