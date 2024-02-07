import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Button, Image } from 'react-bootstrap';

import { apiUrl } from '../helpers/globalVariables';
import Pagination from '../helpers/Pagination';

const Post = () => {
  const postId = useLocation().state;
  const [data, setData] = useState({});
  const [convertedText, setConvertedText] = useState();
  useEffect(() => {
    const loadData = async () => {
      const response = await axios(`${apiUrl}/posts/${postId}`);
      setData(response.data);
      response.data.body && setConvertedText(parse(response.data.body));
    };

    void loadData();
  }, [postId]);

  const navigateToPrevPost = () => {};
  const navigateToNextPost = () => {};

  return (
    <div className={'container'}>
      <div className={'post'}>
        <h1>{data.title}</h1>
        <Image src={data.image} />
        {convertedText}
      </div>
      <div className="post-navigate">
        <Pagination />
        {/*<Button onClick={navigateToPrevPost}>Previous post</Button>*/}
        {/*<Button onClick={navigateToNextPost}>Next post</Button>*/}
      </div>
    </div>
  );
};

export default Post;
