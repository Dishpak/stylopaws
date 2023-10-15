import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

const Category = () => {
  const categoryTitle = useLocation().state;
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
      <h1>Category List Component</h1>
      <div className="row row-cols-4 g-5">
        {products.map((product) => {
          return <Link to={`/product/${product.id}`} state={product.id} key={product.id}>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={product.image} alt=""/>
                <div className="card-body">
                  <h2 className="card-body">{product.title}</h2>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
};

export default Category;
