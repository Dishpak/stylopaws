import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { apiUrl } from '../helpers/globalVariables';
import Pagination from '../helpers/Pagination';
import usePagination from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

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
    void loadPosts();
  }, [currentPage]);

  return (
    <Container className={'blog'}>
      <h1>Our Blog</h1>
      {dataPerPage().map((post) => (
        <Row
          key={post.id}
          className={'article'}
          as={Link}
          to={`/blog/post/${post.id}`}
          state={post.id}
        >
          <Col>
            <h3>{post.title}</h3>
            <div>{post.introText}</div>
          </Col>
          {post.image && (
            <Col lg={3} className={'article-image'}>
              <Image src={post.image[0]} />
            </Col>
          )}
        </Row>
      ))}
      <Pagination
        currentPage={currentPage}
        pagesNumbers={pagesNumbers}
        displayPages={true}
        handleMoveForward={handleMoveForward}
        handleMoveBack={handleMoveBack}
        handleMoveToPage={handleMoveToPage}
      />
    </Container>
  );
};

export default Blog;
