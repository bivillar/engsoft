import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Filter extends Component {
  state = {
    filter: "",
    mensagem: ""
  };

  slides = ["pera", "maça", "abacaxi", "uva", "melancia"];

  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  _handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  _handleClick = e => {
    this.search();
  };

  busca(fruit) {
    var promise = new Promise((resolve, reject) => {
      if (this.slides.length > 0) {
        this.slides.forEach((slide, index) => {
          if (slide.toUpperCase() === fruit.toUpperCase()) {
            resolve(index + 1);
          }
        });
        resolve(-1);
      } else {
        reject(Error("Array vazio"));
      }
    });
    return promise;
  }

  search() {
    this.busca(this.state.filter).then(value => {
      if (value >= 0) {
        this.setState({
          mensagem: "achou " + value
        });
      } else {
        this.setState({
          mensagem: "nao achou"
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Insira uma palavra ou frase..."
            type="text"
            id="slides-search"
            className="form-control ds-input"
            autoComplete="off"
            apellcheck="false"
            role="combobox"
            value={this.state.filter}
            onChange={this._handleChange}
            onKeyDown={this._handleKeyDown}
            style={{ position: "relative", verticalAlign: "top" }}
          />
          <InputGroup.Append>
            <Button
              variant="info outline-secondary"
              onClick={this._handleClick}
            >
              Pesquisar
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <h1>{this.state.mensagem}</h1>
      </div>
    );
  }
}

export default Filter;
