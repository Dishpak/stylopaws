import React, {useState, useEffect} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import AddToCartButton from "./helpers/AddToCartButton";

const Category = () => {
  const categoryTitle = useParams().categoryTitle;
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status ${response.status}`)
        }
        const data = await response.json();
        setProducts(data.filter(product => product.category === categoryTitle))
      } catch (error) {
        console.error('Error:', error);
      }
    }

    loadProducts()
  }, [categoryTitle]);

  return (
    <div className="container">
      <h1>{categoryTitle}</h1>
      <div className="row row-cols-4 g-5">
        {products.map((product) => {
          return (
            <div className="col" key={product.id}>
              <div className="card">
                <img className="card-img-top" src={product.image} alt=""/>
                <div className="card-body">
                  <Link to={`/product/${product.id}`} state={product.id}><h2 className="card-body">{product.title}</h2></Link>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                  <AddToCartButton product={product}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Category;
