import React from 'react';
import {Link} from "react-router-dom";
import {mainPageCategories} from '../helpers/renderDatas'
import {Container, Button, Image, Row, Col} from "react-bootstrap";

const CategoriesSection = () => {
  return (
    <section className="category-list">
      {mainPageCategories.map((category, index) => (
        <div className="py-5" key={index}>
          <Container>
            <Row className="justify-content-between">
              <Col>
                <Image src={category.image}/>
              </Col>
              <Col>
                <div className="container">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                  <Link to={category.link}><Button>Explore now</Button></Link>
                </div>
              </Col></Row>
          </Container>
        </div>
      ))}
    </section>
  );
};

export default CategoriesSection;
