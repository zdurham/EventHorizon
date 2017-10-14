import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Calendar from "./pages/Calendar";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </Router>;

export default App;
