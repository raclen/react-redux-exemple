import { connect } from "react-redux";
import { toggleTodo, getTodo, setVisibilityFilter } from "../actions";

import React from "react";
import Todo from "../components/Todo";

const TodoList = props => {
  console.log("todoList.this.props", props);
  props.dispatch(setVisibilityFilter("222"));
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
export default connect(({ todos, visibilityFilter }) => ({
  todos,
  visibilityFilter
}))(TodoList);
