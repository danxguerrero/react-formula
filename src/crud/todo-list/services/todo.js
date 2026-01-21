// These return a 401 error outside of the React Formula platform
export const getAllTodos = () =>
  fetch("https://api.react-formula.com/learning-api/demos/todo-list-1/todos");

export const addTodo = (text) => {
  fetch(
    "https://api.react-formula.com/learning-api/demos/todo-list-1/todos", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
};

export const deleteTodo = (todoId) =>
  fetch(
    `https://api.react-formula.com/learning-api/demos/todo-list-2/todos/${todoId}`,
    {
      method: "DELETE",
    }
  );

export const updateTodo = (todoId, text, complete) =>
  fetch(
    `https://api.react-formula.com/learning-api/demos/todo-list-2/todos/${todoId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, complete }),
    }
  );
