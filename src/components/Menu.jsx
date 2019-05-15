import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class menu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Navbar.Brand href="/">Slide Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/allslides">Todos os slides</Nav.Link>
            <Nav.Link href="/about">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default menu;
