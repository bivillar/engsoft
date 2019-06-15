import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Menu from "./components/Menu";
import Allslides from "./components/pages/Allslides";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import PrivateRoute from "./services/privateRoute";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Menu />

          <Switch>
            <PrivateRoute exact path='/' component={Search} />
            <PrivateRoute exact path='/allslides' component={Allslides} />
            <PrivateRoute exact path='/about' component={About} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
