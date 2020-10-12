import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount() {
  ReactDOM.render(<App />, document.getElementById("app2"));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("app2"));
}

export async function update(props) {
  console.log("update props", props);
}
