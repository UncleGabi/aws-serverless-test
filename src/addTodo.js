"use strict";
const { v4 } = require("uuid");
let { todos } = require("./todos");

const addTodo = async (event) => {
  const { todo } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  todos = [...todos, newTodo];

  return {
    statusCode: 201,
    body: JSON.stringify({
      item: newTodo,
      todos,
    }),
  };
};

module.exports = {
  handler: addTodo,
};
