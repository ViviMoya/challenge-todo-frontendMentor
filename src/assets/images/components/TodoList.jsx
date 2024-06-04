import CrossIcon from "./icons/CrossIcons"

const TodoList = () => {
	return (
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

	)
}
export default TodoList