import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/pages/Search";
import Menu from "./components/Menu";
import Allslides from "./components/pages/Allslides";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Menu />

          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/allslides" component={Allslides} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
