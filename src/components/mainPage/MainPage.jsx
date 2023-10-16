import React from 'react';
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import Trendings from "../Trendings";
import SubscribeSection from "./SubscribeSection";

const MainPage = () => {
  return (
    <main className="box p-0 w-100">
      <section className="container mb-5">
        <HeroSection/>
      </section>
      <section className="container my-5 category-list">
        <CategoriesSection/>
      </section>
      {/*<section className="container">*/}
      {/*    <Trendings/>*/}
      {/*</section>*/}
      <section className="mt-5">
        <SubscribeSection/>
      </section>
    </main>
  );
};

export default MainPage;
