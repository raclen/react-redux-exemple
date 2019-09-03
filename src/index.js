import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./App";
import "./styles.css";

let store = createStore(todoApp);

function Root() {
  return (
    <Provider store={store}>
      <div className="App">
        <App />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
