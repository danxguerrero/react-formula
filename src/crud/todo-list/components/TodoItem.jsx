export const TodoItem = ({todo}) => {
  return <div className="border border-slate-300 w-full m-2 bg-white p-2 rounded-md flex items-center">
      { todo.complete ? <i className="fa-regular fa-circle-check mr-2 text-green-600 text-xl"></i> : <i className="fa-regular fa-circle text-xl mr-2 text-neutral-300"></i>}
      <div className="text-neutral-500">{todo.text}</div>
    </div>
}