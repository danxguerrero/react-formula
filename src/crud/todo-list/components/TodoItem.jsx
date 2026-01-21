import { useState } from "react";

export const TodoItem = (props) => {
  const { todo, deleteTodo, updateTodo } = props;

  const [updatingTodo, setUpdatingTodo] = useState(false);
  const [updateText, setUpdateText] = useState("");

  return (
    <div className="p-3 my-2 bg-white border border-gray-200 rounded-md text-stone-500 flex justify-between">
      <div className="flex w-full items-center">
        <button onClick={async () => await updateTodo(todo.id, todo.text, !todo.complete)}>
          {todo.complete ? (
            <i className="mr-2 text-xl text-emerald-600 fa-regular fa-circle-check"></i>
          ) : (
            <i className="mr-2 text-xl text-stone-300 fa-regular fa-circle"></i>
          )}
        </button>
        {updatingTodo ? (
          <input
            type="text"
            placeholder={todo.text}
            className="w-full px-1 border border-gray-200 rounded-md p-1"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
          />
        ) : (
          todo.text
        )}
      </div>
      {updatingTodo ? (
        <button
          className="bg-sky-400 text-white rounded-lg p-1 ml-2 px-3"
          onClick={async () => {
            await updateTodo(todo.id, updateText, todo.complete);
            setUpdatingTodo(false);
            setUpdateText("");
          }}
        >
          save
        </button>
      ) : (
        <div className="flex items-center text-stone-300 justify-between">
          <button onClick={() => setUpdatingTodo(true)}>
            <i className="fa-solid fa-pencil mx-1 hover:text-sky-500"></i>
          </button>
          <button
            onClick={async () => {
              await deleteTodo(todo.id);
            }}
          >
            <i className="fa-solid fa-trash mx-1 hover:text-red-500"></i>
          </button>
        </div>
      )}
    </div>
  );
};