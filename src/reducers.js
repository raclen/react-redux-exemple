import { combineReducers } from "redux";

let i = 0;
function todos(state = [], action) {
  i++;
  console.log("action", action);
  console.log("state", state);
  if (action.type === "add.todo") {
    return [...state, { text: action.text, index: i }];
  } else if (action.type === "toggle.todo") {
    return state;
  }
  return state;
}
function visibilityFilter(state = "show.all", action) {
  switch (action.type) {
    case "set.visibility.filter":
      return action.filter;
    default:
      return state;
  }
}

//todos和visibilityFilter就是数据modek
const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

export default todoApp;
