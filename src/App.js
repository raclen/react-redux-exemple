import React from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
const App = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
    </>
  );
};
export default App;
