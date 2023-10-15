import React from 'react';
import {Link} from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section className="category-list">
      <div className='row category-list-right'>
        <div className="col">
          <img src="/assets/cat_men.jpg" alt=""/>
        </div>
        <div className="col">
          <h2>Men's Clothing</h2>
          <p>Timeless elegance and contemporary styles for men</p>
          <Link to={"/categories/101"}>
            <button className="btn btn-primary">Explore now</button>
          </Link>
        </div>
      </div>
      <div className='row category-list-left'>
        <div className="col">
          <img src="/assets/cat_women.jpg" alt=""/>
        </div>
        <div className="col">
          <h2>Women's Clothing</h2>
          <p>Elevate your wardrobe with modern chic and classic elegance</p>
          <Link to={"/categories/102"}>
            <button className="btn btn-primary">Explore now</button>
          </Link>
        </div>
      </div>
      <div className='row category-list-left'>
        <div className="col">
          <img src="/assets/cat_footwear.jpg" alt=""/>
        </div>
        <div className="col">
          <h2>Footwear</h2>
          <p>Step into style: discover the perfect pair for every occasion</p>
          <Link to={"/categories/103"}>
            <button className="btn btn-primary">Explore now</button>
          </Link>
        </div>
      </div>
      <div className='row category-list-left'>
        <div className="col">
          <img src="/assets/cat_accessories.jpg" alt=""/>
        </div>
        <div className="col">
          <h2>Accessories</h2>
          <p>Finishing touches: elevate your look with stylish accessories</p>
          <Link to={"/categories/104"}>
            <button className="btn btn-primary">Explore now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
