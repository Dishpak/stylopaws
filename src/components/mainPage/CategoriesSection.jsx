import React from 'react';
import {Link} from "react-router-dom";

const CategoriesSection = () => {

  return (
    <>
      <div className="row">
        <div className="col-12 category-item my-5">
          <div className="item-img">
            <img src="/assets/cat_men.jpg" alt=""/>
          </div>
          <div className="item-text">
            <h2>Men's Clothing</h2>
            <p>Timeless elegance and contemporary styles for men</p>
            <Link to={"/categories/men's clothing"}>
              <button className="btn btn-primary">Explore now</button>
            </Link>
          </div>
        </div>
        <div className="col-12 category-item my-5">
          <div className="item-img">
          <img src="/assets/cat_women.jpg" alt=""/>
        </div>
          <div className="item-text">
            <h2>Women's Clothing</h2>
            <p>Elevate your wardrobe with modern chic and classic elegance</p>
            <Link to={"/categories/women's clothing"}>
              <button className="btn btn-primary">Explore now</button>
            </Link>
          </div></div>
        <div className="col-12 category-item my-5">
          <div className="item-img">
            <img src="/assets/cat_footwear.jpg" alt=""/>
          </div>
          <div className="item-text">
            <h2>Footwear</h2>
            <p>Step into style: discover the perfect pair for every occasion</p>
            <Link to={"/categories/footwear"}>
              <button className="btn btn-primary">Explore now</button>
            </Link>
          </div>
        </div>
        <div className="col-12 category-item my-5">
          <div className="item-img">
            <img src="/assets/cat_accessories.jpg" alt=""/>
          </div>
          <div className="item-text">
            <h2>Accessories</h2>
            <p>Finishing touches: elevate your look with stylish accessories</p>
            <Link to={"/categories/accessories"}>
              <button className="btn btn-primary">Explore now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
