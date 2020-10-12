import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "whatwg-fetch";
import "custom-event-polyfill";
import "core-js/stable/promise";
import "core-js/stable/symbol";
import "core-js/stable/string/starts-with";
import "core-js/web/url";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "app1",
    entry: "//localhost:3001",
    container: "#render-app",
    activeRule: "/app1",
  },
  {
    name: "app2",
    entry: "//localhost:3002",
    container: "#render-app",
    activeRule: "/app2",
  },
]);

start();

ReactDOM.render(<App />, document.getElementById("root"));
