import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {apiUrl} from "../helpers/globalVariables";

const Post = () => {
  const postId = useLocation().state;
  const [post, setPost] = useState({});

  const loadPost = async () => {
    try {
      const response = await fetch(`${apiUrl}/posts/${postId}`);
      const data = await response.json();
      setPost(data)
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    void loadPost()
  }, [postId]);

  return (
    <Row>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </Row>
  );
};

export default Post;
