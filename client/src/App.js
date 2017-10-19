import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/theme.css"
import "./App.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Events from "./pages/Events";

// These are necessary for Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () =>
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  </Provider>

export default App;
