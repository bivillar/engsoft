import React, { Component } from "react";
import Title from "../Title";
import Slidecard from "../SlideCard";
import { CardColumns } from "react-bootstrap";
import API from "../../services/api";

class allslides extends Component {
  state = {
    title: "Todos os Slides",
    subtitle: "Abaixo estão todos os slides da matéria",
    slides: []
  };

  componentDidMount() {
    API.get("search/", {
      params: {
        term: ""
      }
    }).then(result => {
      this.setState({
        slides: result.data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} subtitle={this.state.subtitle} />
        <div className='container'>
          <CardColumns>
            {this.state.slides.map(slide => (
              <Slidecard
                key={slide.id}
                image={slide.thumbnail}
                num={slide.id - 1}
                link={slide.pdf}
              />
            ))}
          </CardColumns>
        </div>
      </React.Fragment>
    );
  }
}

export default allslides;
