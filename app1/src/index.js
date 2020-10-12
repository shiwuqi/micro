import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export async function bootstrap() {
  console.log("react app bootstraped");
}

console.log(<App />, document.getElementById("app1"));

export async function mount() {
  ReactDOM.render(<App />, document.getElementById("app1"));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("app1"));
}

export async function update(props) {
  console.log("update props", props);
}
