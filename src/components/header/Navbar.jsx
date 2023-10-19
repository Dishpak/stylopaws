import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from '../../globalVariables'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand h-100 p-0">
      <ul className='navbar-nav'>
        <li><NavLink to={ROUTES.HOME} className="nav-link">Home</NavLink></li>
        <li className="nav-item dropdown">
          <NavLink to={`/categories`} className="nav-link">Products</NavLink>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
             aria-expanded="false"></a>
          <ul className="dropdown-menu">
            <li><NavLink to={ROUTES.MENS_CLOTHING} className="dropdown-item">Men's clothing</NavLink></li>
            <li><NavLink to={ROUTES.WOMENS_CLOTHING} className="dropdown-item">Women's clothing</NavLink></li>
            <li><NavLink to={ROUTES.FOOTWEAR} className="dropdown-item">Footwear</NavLink></li>
            <li><NavLink to={ROUTES.ACCESSORIES} className="dropdown-item">Accessories</NavLink></li>
          </ul>
        </li>
        <li><NavLink to={ROUTES.BLOG} className="nav-link">Blog</NavLink></li>
        <li><NavLink to={ROUTES.CATEGORIES} className="nav-link">About</NavLink></li>
        <li><NavLink to={ROUTES.CATEGORIES} className="nav-link">Contacts</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
