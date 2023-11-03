import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import AddToCartButton from "./helpers/AddToCartButton";
import {apiUrl} from "./helpers/globalVariables";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

const Category = () => {
  const categoryTitle = useParams().categoryTitle;
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`)
      }
      const data = await response.json();
      setProducts(data.filter(product => product.category === categoryTitle))
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    void loadProducts();
  }, [categoryTitle]);

  return (
    <Container>
      <h1>{categoryTitle}</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id}>
            <Card>
              <Link to={`/product/${product.id}`} state={product.id}><Card.Img variant="top" src={product.image}/></Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
                <AddToCartButton product={product}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
};

export default Category;
