import React from 'react';

const Header = () => {
  return (
    <header className='border-bottom py-3 shadow'>
      <nav className="navbar navbar-expand h-100 p-0">
        <div className="container">
          <a href="#" className="navbar-brand">StyloPaws</a>
          <ul className='navbar-nav'>
            <li className='nav-item'><a href="#" className="nav-link">Home</a></li>
            <li className='nav-item'><a href="#" className="nav-link">Products</a></li>
            <li className='nav-item'><a href="#" className="nav-link">Blog</a></li>
            <li className='nav-item'><a href="#" className="nav-link">About</a></li>
            <li className='nav-item'><a href="#" className="nav-link">Contacts</a></li>
          </ul>
          <div className="toolbar">
            <a href="#" className="px-2"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="#" className="px-2"><i className="fa-solid fa-cart-shopping"></i></a>
            <a href="#" className="px-2"><i className="fa-solid fa-right-to-bracket"></i></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
