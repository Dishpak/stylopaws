import React from 'react';
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import Trendings from "./Trendings";
import SubscribeSection from "./SubscribeSection";
import Search from "../search/Search";

const MainPage = () => {
  return (
    <>
      <HeroSection/>
      <CategoriesSection/>
      {/*<Trendings/>*/}
      <SubscribeSection/>
    </>
  );
};

export default MainPage;
