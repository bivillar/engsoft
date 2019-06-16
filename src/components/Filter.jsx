import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Spinner,
  Alert
} from "react-bootstrap";
import API from "../services/api";
import SearchCard from "./SearchCard";

class Filter extends Component {
  state = {
    filter: "",
    slides: [],
    loading: false,
    noSlides: false
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
    this.setState({ loading: true, slides: [] });
    if (this.state.filter.length > 0) {
      API.get("search/", {
        params: {
          term: this.state.filter
        }
      }).then(result => {
        this.setState({
          slides: result.data,
          loading: false,
          noSlides: result.data.length > 0 ? false : true
        });
        console.log(this.state);
      });
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    const { filter, slides, loading, noSlides } = this.state;
    return (
      <div>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Insira uma palavra ou frase...'
            type='text'
            id='slides-search'
            className='form-control ds-input'
            autoComplete='off'
            apellcheck='false'
            role='combobox'
            value={filter}
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
        {loading && (
          <div align='center' className='pb-5 pr-5 pl-5 pt-3' id='slides'>
            <Spinner animation='border' variant='info' />
          </div>
        )}

        {slides && slides.length > 0
          ? slides.map(slide => <SearchCard slide={slide} key={slide.id} />)
          : noSlides && (
              <Alert variant='warning'>
                Não existem slides com a frase "{filter}"
              </Alert>
            )}
      </div>
    );
  }
}

export default Filter;
