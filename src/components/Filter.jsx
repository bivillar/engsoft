import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import API from "../services/api";

class Filter extends Component {
  state = {
    filter: "",
    slides: [],
    mensagem: "Pesquise"
  };

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

  search() {
    API.get("search/", {
      params: {
        term: this.state.filter
      }
    }).then(result => {
      this.setState({
        slides: result.data
      });
      console.log(this.state.slides);
    });
  }

  render() {
    return (
      <div className='container'>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Insira uma palavra ou frase...'
            type='text'
            id='slides-search'
            className='form-control ds-input'
            autoComplete='off'
            apellcheck='false'
            role='combobox'
            value={this.state.filter}
            onChange={this._handleChange}
            onKeyDown={this._handleKeyDown}
            style={{ position: "relative", verticalAlign: "top" }}
          />
          <InputGroup.Append>
            <Button
              variant='info outline-secondary'
              onClick={this._handleClick}
            >
              Pesquisar
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {this.state.slides ? (
          <ul>
            {this.state.slides.map(slide => (
              <li>{slide.title}</li>
            ))}
          </ul>
        ) : (
          <h1>{this.state.mensagem}</h1>
        )}
      </div>
    );
  }
}

export default Filter;
