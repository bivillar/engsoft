import React, { Component } from "react";
import Title from "../Title";
import Filter from "../Filter";
import Menu from "../Menu";
import { Container } from "react-bootstrap";

class search extends Component {
  state = {
    title: "Search",
    subtitle: "Pesquise qualquer frase nos slides da matéria",
    slidesEncontrados: {}
  };

  _handleSearch = e => {
    this.setState({
      slidesEncontrados: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <Container>
          <Title title={this.state.title} subtitle={this.state.subtitle} />
          <Filter onSearch={this._handleSearch} />
        </Container>
      </React.Fragment>
    );
  }
}

export default search;
