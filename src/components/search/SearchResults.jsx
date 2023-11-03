import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Link, useLocation} from "react-router-dom";
import {apiUrl} from "../helpers/globalVariables";
import {Card, ListGroup, Row, Col} from "react-bootstrap";
import {ROUTES} from "../helpers/globalVariables";

const SearchResults = () => {
  const query = useLocation().state.query;
  const [searchResultsProducts, setSearchResultsProducts] = useState([]);
  const [searchResultsBlog, setSearchResultsBlog] = useState([]);

  const loadSearchData = async () => {
    try {
      const responseProducts = await fetch(`${apiUrl}/products?q=${query}`)
      const dataProducts = await responseProducts.json();
      setSearchResultsProducts(dataProducts)

      const responseBlog = await fetch(`${apiUrl}/posts?q=${query}`)
      const dataBlog = await responseBlog.json();
      setSearchResultsBlog(dataBlog)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    loadSearchData();
  }, [query]);


  return (
    <Container>
      <h3>Your search results for: {query}</h3>
      <p>In products: {searchResultsProducts.length} items</p>
      {searchResultsProducts.map((result, index) => (
        <Row key={index}>
          <Col>
            <Card>
              <Card.Img variant="top" src={result.image}/>
              <Card.Body>
                <Card.Title as={Link} to={`${ROUTES.PRODUCT}/${result.id}`} state={result.id}>{result.title}</Card.Title>
                <Card.Text>{result.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
        <p>In blog: {searchResultsBlog.length} posts</p>
      {searchResultsBlog.map((result, index) => (
        <Row key={index}>
          <Col>
            <ListGroup>
              <ListGroup.Item as={Link} to={`${ROUTES.POST}/${result.id}`} state={result.id}>{result.title}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SearchResults;
