import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { browserHistory } from 'react-router-dom'
import "./App.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Dashboard from './pages/Dashboard';
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import Authenticate from './components/Authenticate'


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
          <Route exact path='/dashboard' component={Authenticate(Dashboard)} />
          <Route exact path="/events" component={Events}/>
          <Route exact path="/new_event" component={NewEvent}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>

export default App;
