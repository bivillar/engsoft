import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SlideCard extends Component {
  render() {
    const { image, num, link } = this.props;
    return (
      <React.Fragment>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <Card bg='info'>
            <Card.Img variant='top' src={image} />
            <Card.Body>
              <Card.Title>Aula {num}</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </React.Fragment>
    );
  }
}

export default SlideCard;
