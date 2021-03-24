import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import ReactDOM from "react-dom";
import { config } from "./overmind";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

export const overmind = createOvermind(config, {
  devtools: process.env.NODE_ENV !== "production",
});

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
