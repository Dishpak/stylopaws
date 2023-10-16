import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/categories');
      if(!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`)
      }
      const data = await response.json();
      setCategories([...data])
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="container">
      <h1>Category List Component</h1>
      <div className="row row-cols-4 g-5">
        {categories.map((category) => {
        return <Link to={`${category.title}`} key={category.id}>
          <div className="col">
            <div className="card">
              <img className="card-img-top" src={category.image} alt=""/>
              <div className="card-body">
                <h2 className="card-body">{category.title}</h2>
                <p className="card-text">{category.description}</p>
              </div>
            </div>
          </div>
        </Link>
      })}
      </div>
</div>
)
  ;
};

export default CategoriesList;
