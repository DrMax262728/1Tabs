import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import * as serviceWorker from "serviceWorker";
import SimpleTabs from "containers/SimpleTabs";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";

const store = createStore(rootReducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <SimpleTabs />
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
