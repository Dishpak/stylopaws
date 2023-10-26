import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from '../globalVariables';
import {NavDropdown, Nav, Container, Navbar, Badge} from "react-bootstrap";
import useCartIco from "../hooks/useCartIco";
import Search from "./Search";
import AuthModal from "./auth/AuthModal";
import Userbar from "./header/UserBar";
import {useSelector} from "react-redux";

const Header = () => {
  const user = useSelector(state => state.user.user)
  const [cartCounter] = useCartIco()
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);



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
                <NavDropdown title="Products" id="basic-nav-dropdown" show={true}>
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
              <span className="toolbar-ico"
                    onClick={() => setSearchbarVisible(!searchbarVisible)}
                    aria-controls="searchbar"
                    aria-expanded={searchbarVisible}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
              <span className="toolbar-ico">
          <Link to={ROUTES.CART} className="px-2"><i className="fa-solid fa-cart-shopping"></i><Badge
            pill>{cartCounter > 0 && cartCounter}</Badge></Link>
        </span>
              {user?.username
                ? <>
                    <Userbar user={user} />
                  </>
                : <span className="toolbar-ico" onClick={handleShow}>
                  <i className="fa-solid fa-right-to-bracket"></i>
                  </span>
              }
            </div>
          </Container>
        </Navbar>
      </header>
      <Container id="searchbar-container" className="w-25">
        <Search searchbarVisible={searchbarVisible}/>
      </Container>
      <AuthModal
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default Header;
