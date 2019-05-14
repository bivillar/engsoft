import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class title extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default title;
