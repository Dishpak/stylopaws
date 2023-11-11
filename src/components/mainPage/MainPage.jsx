import React from 'react';
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import TopRated from "./TopRated";
import SubscribeSection from "./SubscribeSection";

const MainPage = () => {
  return (
    <>
      <HeroSection/>
      <CategoriesSection/>
      <TopRated/>
      <SubscribeSection/>
    </>
  );
};

export default MainPage;
