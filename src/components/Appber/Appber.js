import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Appber = () => {
  return (
    <>
      <Navbar className="bg-light"  expand='lg'>
        <Container>
          <Link className=' text-decoration-none text-info fs-2' to='/home'>
            Logo
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto '>
              <NavLink className='mr-5  text-info  nav-link fs-4' to='/home'>
                Home
              </NavLink>
              <NavLink className='mr-5  text-info  nav-link fs-4' to='/about'>
                About
              </NavLink>
              <NavLink className='mr-5  text-info  nav-link fs-4' to='/service'>
                Service
              </NavLink>
              <NavLink className='mr-5  text-info  nav-link fs-4' to='/contact'>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appber;
