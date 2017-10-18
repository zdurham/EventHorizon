import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/theme.css"
import "./App.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Register from './components/Register'

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
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  </Provider>

export default App;
