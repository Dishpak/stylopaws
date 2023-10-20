import React, {useEffect, useState} from 'react';
import {apiUrl} from "../../globalVariables";
import Pagination from "../helpers/Pagination";
import usePagination from "../../hooks/usePagination";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const itemsPerPageLimit = 20;
  const {
    currentPage,
    handleMoveForward,
    handleMoveBack,
    handleMoveToPage,
    dataPerPage
  } = usePagination(posts, itemsPerPageLimit);
  const pagesNumbers = Math.ceil(posts.length / itemsPerPageLimit);

  const loadPosts = async () => {
    try {
      const response = await fetch(`${apiUrl}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`)
      }
      const data = await response.json();
      setPosts(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  return (
    <div className="container">
      <h1>Blog Component</h1>
      {
        dataPerPage().map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </div>
        ))
      }
      <Pagination
        currentPage={currentPage}
        pagesNumbers={pagesNumbers}
        handleMoveForward={handleMoveForward}
        handleMoveBack={handleMoveBack}
        handleMoveToPage={handleMoveToPage}
      />
    </div>
  );
};

export default Blog;
