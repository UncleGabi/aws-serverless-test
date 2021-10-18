"use strict";
let { todos } = require("./todos");

const fetchTodo = async (event) => {
  const { id } = event.pathParameters;
  const todo = todos.find((item) => item.id === id);

  return {
    statusCode: 200,
    body: JSON.stringify({
      todo,
    }),
  };
};

module.exports = {
  handler: fetchTodo,
};
