import CrossIcon from "./icons/CrossIcons";

const TodoItem = ({ todo }) => {

const {id, title, completed } = todo

	return (
		<article className="flex gap-4 border-b py-4 border-b-gray-400 px-4">
			<button className="inline-block rounded-full border-2 h-5 w-5"></button>
			<p className="grow text-gray-600">
				{title}
			</p>
			<button className="">
				<CrossIcon />
			</button>
		</article>
	)
}

export default TodoItem;