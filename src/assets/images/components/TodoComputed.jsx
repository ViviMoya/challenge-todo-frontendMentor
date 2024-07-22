const TodoComputed = ( {computedItemsLeft} ) => {
	return (
		<section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
		{" "}
		<span className="text-gray-400 ">{computedItemsLeft} item left</span>
		<button className="text-gray-400 ">
			clear complete
		</button>
	</section>

	)
}
export default TodoComputed; 