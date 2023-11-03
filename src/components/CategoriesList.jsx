import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import {apiUrl} from "./helpers/globalVariables";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`)
      }
      const data = await response.json();
      setCategories([...data])
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    void loadCategories();
  }, []);

  return (
    <Container>
      <h1>Pick a Category</h1>
      <Row>
        {categories.map(category => (
          <Col key={category.id}>
            <Card>
              <Card.Img variant="top" src={category.image}/>
              <Card.Body>
                <Card.Title as={Link} to={category.title}>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesList;
