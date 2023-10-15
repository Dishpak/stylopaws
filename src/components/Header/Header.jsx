import React from 'react';
import {NavLink, Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='border-bottom py-3 shadow'>
      <nav className="navbar navbar-expand h-100 p-0">
        <div className="container">
          <a href="/" className="navbar-brand">StyloPaws</a>
          <ul className='navbar-nav'>
            <li><NavLink to={`/`} className="nav-link">Home</NavLink></li>
            <li><NavLink to={`/categories`} className="nav-link">Products</NavLink></li>
            <li><NavLink to={`/categories`} className="nav-link">Blog</NavLink></li>
            <li><NavLink to={`/categories`} className="nav-link">About</NavLink></li>
            <li><NavLink to={`/categories`} className="nav-link">Contacts</NavLink></li>
          </ul>
          <div className="toolbar">
            <a href="#" className="px-2"><i className="fa-solid fa-magnifying-glass"></i></a>
            <Link to={"/cart"} className="px-2"><i className="fa-solid fa-cart-shopping"></i></Link>
            <a href="#" className="px-2"><i className="fa-solid fa-right-to-bracket"></i></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
