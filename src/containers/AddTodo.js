import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  handleAdd = () => {
    let value = this.input.value;
    this.props.dispatch(addTodo(value));
    this.input.value = "";
  };
  render() {
    console.log("add. this.props", this.props);

    return (
      <div>
        <h2>AddTodo</h2>
        <>
          <input ref={e => (this.input = e)} />
          <button onClick={this.handleAdd}>添加</button>
        </>
      </div>
    );
  }
}
export default connect(({ todos }) => ({ todos }))(AddTodo);
