import React from 'react';
import {NavLink, Link} from "react-router-dom";
import useCartIco from "../../hooks/useCartIco";

const Header = () => {
  const [cartIconClass, cartCounter] = useCartIco();

  return (
    <header className='border-bottom py-3 shadow sticky-top'>
      <nav className="navbar navbar-expand h-100 p-0">
        <div className="container">
          <a href="/" className="navbar-brand">StyloPaws</a>
          <ul className='navbar-nav'>
            <li><NavLink to={`/`} className="nav-link">Home</NavLink></li>
            <li className="nav-item dropdown">
              <NavLink to={`/categories`} className="nav-link">Products</NavLink>
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"></a>
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
          <div className="toolbar">
            <a href="#" className="px-2"><i className="fa-solid fa-magnifying-glass"></i></a>
            <Link to={"/cart"} className={`px-2 ${cartIconClass}`}><i className="fa-solid fa-cart-shopping"></i>{cartCounter}</Link>
            <a href="#" className="px-2"><i className="fa-solid fa-right-to-bracket"></i></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
