import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { apiUrl } from '../helpers/globalVariables';
import Pagination from '../helpers/BootstrapPagination';
import usePagination from '../../hooks/usePagination';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const itemsPerPageLimit = 10;
  const {
    currentPage,
    handleMoveForward,
    handleMoveBack,
    handleMoveToPage,
    dataPerPage,
  } = usePagination(posts, itemsPerPageLimit);
  const pagesNumbers = Math.ceil(posts.length / itemsPerPageLimit);

  const loadPosts = async () => {
    try {
      const response = await fetch(`${apiUrl}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  return (
    <Container className={'blog'}>
      <h1>Our Blog</h1>
      <Row>
        <Col>
          {dataPerPage().map((post) => (
            <div key={post.id} className={'article'}>
              <h3>{post.title}</h3>
              <div>{post.body}</div>
            </div>
          ))}
        </Col>
      </Row>
      <Pagination
        currentPage={currentPage}
        pagesNumbers={pagesNumbers}
        handleMoveForward={handleMoveForward}
        handleMoveBack={handleMoveBack}
        handleMoveToPage={handleMoveToPage}
      />
    </Container>
  );
};

export default Blog;
