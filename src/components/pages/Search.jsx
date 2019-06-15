import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Title from "../Title";
import Filter from "../Filter";

class search extends Component {
  state = {
    title: "Search",
    subtitle: "Pesquise qualquer palavra nos slides da matéria",
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
        <Title title={this.state.title} subtitle={this.state.subtitle} />
        <Filter onSearch={this._handleSearch} />
      </React.Fragment>
    );
  }
}

export default search;
