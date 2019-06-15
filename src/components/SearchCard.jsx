import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class SearchCard extends Component {
  render() {
    const { slide } = this.props;
    return (
      <Card className='mb-2'>
        <a href={slide.pdf} target='_blank' rel='noopener noreferrer'>
          <Card.Header border='info'>Slide {slide.id - 1}</Card.Header>
          <Row>
            <Col lg={3} md={3} sm={3}>
              <Card.Img
                style={{ maxWidth: "10rem" }}
                variant='left'
                src={slide.thumbnail}
              />
            </Col>
            <Col lg={9} md={9} sm={9}>
              Páginas:
              {slide.slides.map(page => (
                <span key={page.num_page}> {page.num_page} </span>
              ))}
            </Col>
          </Row>
        </a>
      </Card>
    );
  }
}

export default SearchCard;
