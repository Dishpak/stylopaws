import React from 'react';
import {Link} from "react-router-dom";

const HeroSection = () => {
  return (
    <div className='row mx-0 mb-5'>
      <div className="col p-0">
        <div
          className="container h-100 d-flex flex-column justify-content-center align-items-start text-start px-0">
          <h1>Elevate Your Style</h1>
          <p>Discover Modern, Stylish Clothing for Every Occasion. Shop Now for the Latest Trends!</p>
          <Link to={"/categories"}>
            <button className="btn btn-primary px-4 py-3">Shop now</button>
          </Link>
        </div>
      </div>
      <div className="col p-0 h-100">
        <img src="/assets/hero_image.jpg" alt="hero banner image" className="w-100 h-auto"/>
      </div>
    </div>
  );
};

export default HeroSection;
