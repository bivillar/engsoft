import React, { Component } from "react";
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
