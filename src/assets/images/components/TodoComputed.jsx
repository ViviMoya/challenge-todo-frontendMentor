// eslint-disable-next-line react/prop-types
const TodoComputed = ( { computedItemsLeft, clearCompleted } ) => {
	return (
		<section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
		{" "}
		<span className="text-gray-400 ">{computedItemsLeft} item left</span>
		<button className="text-gray-400 " onClick={clearCompleted}>
			clear completed
		</button>
	</section>

	)
}
export default TodoComputed; 
