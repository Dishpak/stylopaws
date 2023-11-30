import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { apiUrl } from './globalVariables';
import { addFeatured } from '../../store/userSlice';

const FeaturedIcon = (id) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isFeatured, setIsFeatured] = useState(
    user?.featured?.find((item) => item === id),
  );

  const [...featuredItems] = user.featured;
  const handleFeatured = ({ id }) => {
    featuredItems.includes(id)
      ? featuredItems.filter((item) => item !== id)
      : featuredItems.push(id);
    axios.patch(`${apiUrl}/users/${user.id}`, {
      featured: featuredItems,
    });

    dispatch(addFeatured(id));
    setIsFeatured(!isFeatured);
  };
  return (
    <div>
      <i
        className={`fa-${isFeatured ? 'solid' : 'regular'} fa-star featured`}
        onClick={() => handleFeatured(id)}
      ></i>
    </div>
  );
};

export default FeaturedIcon;
