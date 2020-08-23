import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

// routers are important and will be used in all projects
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="./">Home</Link>
        <Link to="./about">About</Link>
        <Link to="./contact">Contact</Link>

        <Switch>
          <Route exact path="/">
            <h1>Hello from home</h1>
          </Route>
          <Route exact path="/about">
            <h1>Hello from about</h1>
          </Route>
          <Route exact path="/contact">
            <h1>Hello from contact</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
