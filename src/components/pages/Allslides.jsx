import React, { Component } from "react";
import Title from "../Title";
import Slidecard from "../SlideCard";
import { CardColumns, Container, Spinner } from "react-bootstrap";
import API from "../../services/api";
import Menu from "../Menu";

class allslides extends Component {
  state = {
    title: "Todos os Slides",
    subtitle: "Abaixo estão todos os slides da matéria",
    slides: [],
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: true });
    API.get("search/", {
      params: {
        term: ""
      }
    }).then(result => {
      this.setState({
        slides: result.data,
        loading: false
      });
    });
  }

  render() {
    const { title, subtitle, slides, loading } = this.state;
    return (
      <React.Fragment>
        <Menu />
        <Container>
          <Title title={title} subtitle={subtitle} />
          {loading && (
            <div align='center' class='pb-5 pr-5 pl-5 pt-3' id='slides'>
              <Spinner animation='border' variant='info' />
            </div>
          )}
          <CardColumns>
            {slides.map(slide => (
              <Slidecard
                key={slide.id}
                image={slide.thumbnail}
                num={slide.id - 1}
                link={slide.pdf}
              />
            ))}
          </CardColumns>
        </Container>
      </React.Fragment>
    );
  }
}

export default allslides;
