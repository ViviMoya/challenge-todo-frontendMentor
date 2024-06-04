const TodoFilter = () => {
	return (
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
	)
}

export default TodoFilter;