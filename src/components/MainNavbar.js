import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'gatsby'

const MainNavbarLinks = () => {
  return (  
    <>
      {[
        { route: `/about`, title: `About` },
        { route: `/contact`, title: `Contact` },
      ].map((link) => (
        <Link
          className="nav-link text-white"
          key={link.title}
          to={link.route}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
}
 

const MainNavbar = () => {
  return (  
    <Navbar expand="lg" className="bg-green-700 navbar-dark" style={{ paddingTop: 0, paddingBottom: 0}}>
      <Navbar.Brand>
        <Link to="/">
          <Image style={{ height: '60px'}} src={`https://coursecube.com/jlc/1.1/images/CCLogo-White-1.png`} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="w-full">
        <Nav className="text-white">
          <MainNavbar.Links />
        </Nav>
        <Nav className="text-white flex-1 justify-center">
          {/* <Form inline className="w-full max-w-md">
            <FormControl type="text" placeholder="Search courses" className="w-full border-0 rounded-full focus:ring-2 text-gray-700 bg-gray-100 shadow-lg"/>
          </Form> */}
        </Nav>
        <Navbar.Text>
          Tel: <a href="tel:+9177950 99 999">+91 77950 99 999</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

MainNavbar.Links = MainNavbarLinks;

export default MainNavbar;