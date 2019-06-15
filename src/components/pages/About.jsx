import React, { Component } from "react";
import Title from "../Title";
import Menu from "../Menu";

class about extends Component {
  state = {
    title: "Sobre",
    subtitle: "Projeto de Princípios de Engenharia de Software"
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <Title title={this.state.title} subtitle={this.state.subtitle} />
      </React.Fragment>
    );
  }
}

export default about;
