import React from 'react';
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import Trendings from "./Trendings";
import SubscribeSection from "./SubscribeSection";
import Search from "../Search";

const MainPage = () => {
  return (
    <>
      <Search />
      <HeroSection/>
      <CategoriesSection/>
      {/*<Trendings/>*/}
      <SubscribeSection/>
    </>
  );
};

export default MainPage;
