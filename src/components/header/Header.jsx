import React from 'react';
import Toolbar from "./Toolbar";
import Navbar from "./Navbar"
import Logo from "./Logo";

const Header = () => {

  return (
    <header className='border-bottom py-3 shadow sticky-top'>
      <div className="container d-flex justify-content-between align-items-center">
        <Logo />
        <Navbar/>
        <Toolbar/>
      </div>
    </header>
  );
};

export default Header;
