import React, { Component } from "react";
import Title from "../Title";
import Slidecard from "../SlideCard";
import { CardColumns, CardDeck, CardGroup, Card } from "react-bootstrap";
import Aula1 from "../../images/Aula1.jpg";
import Aula2 from "../../images/Aula2.jpg";
import Aula3 from "../../images/Aula3.jpg";

class allslides extends Component {
  state = {
    title: "Todos os Slides",
    subtitle: "Abaixo estão todos os slides da matéria",
    slides: [
      {
        name: "Aula 1",
        image: Aula1,
        num: 1
      },
      {
        name: "Aula 2",
        image: Aula2,
        num: 2
      },
      {
        name: "Aula 3",
        image: Aula3,
        num: 3
      },
      {
        name: "Aula 4",
        image: Aula3,
        num: 4
      },
      {
        name: "Aula 5",
        image: Aula3,
        num: 5
      },
      {
        name: "Aula 6",
        image: Aula3,
        num: 6
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} subtitle={this.state.subtitle} />
        <div className="container">
          <CardColumns>
            {this.state.slides.map(slide => (
              <Slidecard
                image={slide.image}
                name={slide.name}
                num={slide.num}
              />
            ))}
          </CardColumns>
        </div>
      </React.Fragment>
    );
  }
}

export default allslides;
