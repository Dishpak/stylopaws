import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand h-100 p-0">
      <ul className='navbar-nav'>
        <li><NavLink to={`/`} className="nav-link">Home</NavLink></li>
        <li className="nav-item dropdown">
          <NavLink to={`/categories`} className="nav-link">Products</NavLink>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
             aria-expanded="false"></a>
          <ul className="dropdown-menu">
            <li><NavLink to={"/categories/men's clothing"} className="dropdown-item">Men's clothing</NavLink></li>
            <li><NavLink to={"/categories/women's clothing"} className="dropdown-item">Women's clothing</NavLink></li>
            <li><NavLink to={"/categories/footwear"} className="dropdown-item">Footwear</NavLink></li>
            <li><NavLink to={"/categories/accessories"} className="dropdown-item">Accessories</NavLink></li>
          </ul>
        </li>
        <li><NavLink to={`/categories`} className="nav-link">Blog</NavLink></li>
        <li><NavLink to={`/categories`} className="nav-link">About</NavLink></li>
        <li><NavLink to={`/categories`} className="nav-link">Contacts</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
