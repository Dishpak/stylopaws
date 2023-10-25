import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from '../globalVariables';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavDropdown} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import useCartIco from "../hooks/useCartIco";
import Search from "./Search";
import {useToggle} from "../hooks/useToggle";

const Header = () => {
  const [cartCounter] = useCartIco()
  const [showBarVisibility, toggle] = useToggle(false);

  const searchBarToggler = () => {
    const searchbar = document.getElementById('searchbar');
    if (!showBarVisibility) {
      toggle()
      searchbar.style.top = '0';
    } else {
      searchbar.style.top = '-100px';
      toggle()
    }
  }
  return (
    <>
      <header className='border-bottom py-2 shadow sticky-top'>
        <Navbar expand="lg" className="w-100 justify-content-between">
          <Container className="p-0">
            <Navbar.Brand as={NavLink} to={ROUTES.HOME}>StyloPaws</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mx-auto">
                <Nav.Link as={NavLink} to={ROUTES.HOME}>Home</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to={ROUTES.MENS_CLOTHING}>Men's clothing</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={ROUTES.WOMENS_CLOTHING}>Women's clothing</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={ROUTES.FOOTWEAR}>Footwear</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={ROUTES.ACCESSORIES}>Accessories</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to={ROUTES.BLOG}>Blog</Nav.Link>
                <Nav.Link as={NavLink} to={ROUTES.ABOUT}>About</Nav.Link>
                <Nav.Link as={NavLink} to={ROUTES.CONTACTS}>Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="toolbar">
              <span className="toolbar-ico" onClick={searchBarToggler}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
              <span className="toolbar-ico">
          <Link to={ROUTES.CART} className="px-2"><i className="fa-solid fa-cart-shopping"></i><Badge
            pill>{cartCounter !== 0 && cartCounter}</Badge></Link>
        </span>
              <span className="toolbar-ico">
          <a href="src/components/Header#" className="px-2"><i className="fa-solid fa-right-to-bracket"></i></a>
        </span>
            </div>
          </Container>
        </Navbar>
      </header>
      <Container id="searchbar-container" className="w-25">
        <Search toggle={toggle}/>
      </Container>
    </>
  );
};

export default Header;
