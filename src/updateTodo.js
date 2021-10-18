"use strict";
let { todos } = require("./todos");

const updateTodo = async (event) => {
  const { id } = event.pathParameters;
  const { todo, completed } = JSON.parse(event.body);

  const updatedTodos = todos.map((item) => {
    return item.id === id
      ? {
          ...item,
          todo: todo || item.todo,
          completed: completed || item.completed,
        }
      : item;
  });

  const updatedTodo = updatedTodos.find((item) => item.id === id);

  todos = updatedTodos;

  return {
    statusCode: 200,
    body: JSON.stringify({
      todo: updatedTodo,
      todos,
    }),
  };
};

module.exports = {
  handler: updateTodo,
};
