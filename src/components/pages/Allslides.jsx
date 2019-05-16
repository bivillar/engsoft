import React, { Component } from "react";
import Title from "../Title";
import Slidecard from "../SlideCard";
import { CardDeck, Card } from "react-bootstrap";
import Aula1 from "../../images/Aula1.jpg";

class allslides extends Component {
  state = {
    title: "Todos os Slides",
    subtitle: "Abaixo estão todos os slides da matéria",
    slides: [
      {
        name: "Aula 1",
        image: Aula1,
        num: 1
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} subtitle={this.state.subtitle} />
        <CardDeck className="container">
          {/* <Card>
            <Card.Img variant="top" src={this.state.slides[0].image} />
            <Card.Body>
              <Card.Title>{this.state.slides[0].name}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> */}
          <Slidecard
            image={this.state.slides[0].image}
            name={this.state.slides[0].name}
            num={this.state.slides[0].num}
          />
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default allslides;
