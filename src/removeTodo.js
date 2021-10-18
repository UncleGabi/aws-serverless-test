"use strict";
let { todos } = require("./todos");

const removeTodo = async (event) => {
  const { id } = event.pathParameters;
  const newTodos = todos.filter((todo) => todo.id !== id);

  todos = newTodos;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Todo ${id} is deleted`,
      todos,
      newTodos,
    }),
  };
};

module.exports = {
  handler: removeTodo,
};
