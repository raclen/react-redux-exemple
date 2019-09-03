import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("todoList.this.props", props);
  let { todos = [] } = props;
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </ul>
      <button>获取</button>
    </>
  );
};

export default TodoList;
