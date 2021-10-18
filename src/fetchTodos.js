const { todos } = require("./todos");

const fetchTodos = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      todos,
    }),
  };
};

module.exports = {
  handler: fetchTodos,
};
