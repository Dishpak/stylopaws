import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { apiUrl } from './globalVariables';
import { toggleFeatured } from '../../store/userSlice';

const FeaturedIcon = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const featuredItems = user.featured;
  const [isFeatured, setIsFeatured] = useState(false);

  useEffect(() => {
    setIsFeatured(featuredItems.some((item) => item.id === product.id));
  }, [user, featuredItems, product.id]);

  const handleFeatured = () => {
    const isProductFeatured = featuredItems.some(
      (item) => item.id === product.id,
    );
    dispatch(toggleFeatured(product));

    const updateFeaturedItems = isProductFeatured
      ? featuredItems.filter((item) => item.id !== product.id)
      : [...featuredItems, product];

    axios.patch(`${apiUrl}/users/${user.id}`, {
      featured: updateFeaturedItems,
    });

    setIsFeatured(!isFeatured);
  };
  return (
    <>
      <i
        className={`fa-${isFeatured ? 'solid' : 'regular'} fa-star featured`}
        onClick={handleFeatured}
      ></i>
    </>
  );
};

export default FeaturedIcon;
