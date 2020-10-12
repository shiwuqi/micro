import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/app1">app1</Link>
        </li>
        <li>
          <Link to="/app2">app2</Link>
        </li>
      </ul>
      <div id="render-app"></div>
    </Router>
  );
}

export default App;
