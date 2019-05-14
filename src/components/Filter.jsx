import React, { Component } from "react";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";

class Filter extends Component {
  state = {
    filter: "",
    mensagem: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  search() {
    this.setState({
      mensagem: "PESQUISOU:" + this.state.filter
    });
  }

  render() {
    return (
      <div class="container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Insira uma palavra ou frase..."
            type="text"
            id="slides-search"
            class="form-control ds-input"
            autocomplete="off"
            apellcheck="false"
            role="combobox"
            value={this.state.filter}
            onChange={this.handleChange}
            onKeyDown={this._handleKeyDown}
            style={{ position: "relative", verticalAlign: "top" }}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Pesquisar</Button>
          </InputGroup.Append>
        </InputGroup>
        <h1>{this.state.mensagem}</h1>
      </div>
    );
  }
}

export default Filter;
