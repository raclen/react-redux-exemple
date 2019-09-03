export function addTodo(text) {
  return {
    type: "add.todo",
    text
  };
}
export function toggleTodo(index) {
  return {
    type: "toggle.todo",
    index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: "set.visibility.filter",
    filter
  };
}
