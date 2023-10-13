import React, {useState, useEffect} from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    await fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories([...data])
      })
  }

  useEffect(() => {
    loadCategories();
  }, []);

  console.log(categories);
  return (
    <div className="container">
      <h1>Category List Component</h1>
      <div className="row row-cols-4 g-5">
        {categories.map((category) => {
        return <div className="col">
          <div key={category.id} className="card">
            <img className="card-img-top" src={category.image} alt=""/>
            <div className="card-body">
              <h2 className="card-body">{category.title}</h2>
              <p className="card-text">{category.description}</p>
            </div>
          </div>
        </div>
      })}
      </div>
</div>
)
  ;
};

export default CategoryList;
