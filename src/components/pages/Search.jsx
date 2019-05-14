import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Title from "../Title";

class search extends Component {
  state = {
    title: "Search",
    subtitle: "Pesquise qualquer palavra nos slides da matéria"
  };

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} subtitle={this.state.subtitle} />
      </React.Fragment>
    );
  }
}

export default search;
