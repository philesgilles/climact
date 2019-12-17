import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// setup middleware logger
const logger = store => {
  return next => {
    return action => {
      console.log("[STATE MIDDLEWARE] Dispatch :", action);
      const result = next(action);
      console.log("[STATE MIDDLEWARE] New State :", store.getState());
      return result;
    };
  };
};
//setting up store with middleware and redux dev tools viewers
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
