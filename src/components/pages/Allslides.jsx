import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Router, Link } from "react-router-dom";
import Title from "../Title";

class allslides extends Component {
  state = {
    title: "Todos os Slides",
    subtitle: "Abaixo estão todos os slides da matéria"
  };

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} subtitle={this.state.subtitle} />
      </React.Fragment>
    );
  }
}

export default allslides;
