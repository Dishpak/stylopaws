import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Button, Image } from 'react-bootstrap';

import { apiUrl } from '../helpers/globalVariables';
import Pagination from '../helpers/Pagination';

const Post = () => {
  const [postId, setPostId] = useState(Number(useParams().postId));
  const fetchUrl = `${apiUrl}/posts/${postId}`;
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [convertedText, setConvertedText] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(fetchUrl);
      setData(response.data);
      console.log(response);
      response.data.body && setConvertedText(parse(response.data.body));
    };

    void loadData();
  }, [postId, convertedText]);

  const navigateToPrevPost = () => {
    if (postId !== 1) {
      navigate(`../${postId >= 1 ? postId - 1 : 1}`, { relative: 'path' });
      setPostId((prev) => (prev >= 1 ? postId + -1 : 1));
      // window.location.reload();
    }
  };
  const navigateToNextPost = () => {
    navigate(`../${postId + 1}`, { relative: 'path' });
    setPostId((prev) => postId + 1);
    // window.location.reload();
  };

  // console.log(convertedText);

  return (
    <div className={'container'}>
      <div className={'post'}>
        <h1>{data.title}</h1>
        <Image src={data.image} />
        {convertedText}
      </div>
      <div className="post-navigate">
        <Pagination />
        <Button onClick={navigateToPrevPost}>Previous post</Button>
        <Button onClick={navigateToNextPost}>Next post</Button>
      </div>
    </div>
  );
};

export default Post;
