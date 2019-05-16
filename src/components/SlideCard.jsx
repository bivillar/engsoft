import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SlideCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card bg="info">
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>Aula {this.props.num}</Card.Title>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default SlideCard;
