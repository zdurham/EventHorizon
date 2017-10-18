import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/theme.css"
import "./App.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Events from "./pages/Events";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About}/>
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;
