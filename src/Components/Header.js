import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
// import { Button } from 'react-bootstrap';


function Header() {
  const productCount = useSelector(state => state.cart);
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className='container'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#home">E-Commerce</Navbar.Brand> */}
          <Nav className="ml-auto">
            <Link to="/" className="nav-link fs-5">E-Commerce</Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link fs-5">Home</Link>
              {/* <Link to="/products" className="nav-link fs-5">Products</Link> */}
              <Link to="/men" className="nav-link fs-5">Men</Link>
              <Link to="/women" className="nav-link fs-5">Women</Link>
              <Link to="/electronics" className="nav-link fs-5">Electronics</Link>
              <Link to="/jewelry" className="nav-link fs-5">Jewelery</Link>
            </Nav>
            {/* <div >
              {
                isAuthenticated && (<Nav className="ml-auto mr-3">
                  <span className="pr-4">
                  <h6 className='text-center pt-2 pr-6'>Hello {user.name} </h6> </span>
                </Nav>)
              }

            </div> */}
            {/* {
              (isAuthenticated) ? <Nav className="ml-auto ">
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </Button>
              </Nav> : <Nav className="ml-auto">
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
              </Nav>
            } */}
            <Nav className="ml-auto"><Link to="/login" className="nav-link fs-5">Login</Link></Nav>

            <Nav className="ml-auto">
              <Link to="/cart" className="nav-link fs-5">My Cart {productCount.length}</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
