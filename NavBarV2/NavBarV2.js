import React, { useState, useEffect } from 'react';
import {Navbar, Nav, Image} from "react-bootstrap";
import {useLocation} from 'react-router-dom'
import './NavBarV2.scss'

export default function NavBarV2(props) {
  const location = useLocation();
  const [navActiveLink, setNavActiveLink] = useState('default');

  useEffect(() => {
    setNavActiveLink(location.pathname);
  }, [location])

  useEffect(() => {
    setNavActiveLink(props.navActiveLink);
  }, [props.navActiveLink])

  return (
    <div className="navigation">
      <div className="container">
        <Navbar expand="lg" variant="dark" className="px-0" collapseOnSelect={true}>
          <Navbar.Brand href="/home">
            <div className="logo">
              <Image
                fluid
                height="40"
                src={props.logo}
                alt="Logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              activeKey={navActiveLink}
              className="me-auto my-2 my-lg-0"
              //style={{ maxHeight: '100px' }}
              //navbarScroll
            >
              <Nav.Link id="nav-home" eventKey="/" href="/">Home</Nav.Link>
              <Nav.Link id="nav-about" eventKey="/home/about" href="/home/about">About</Nav.Link>
              <Nav.Link id="nav-services" eventKey="/home/services" href="/home/services">Services</Nav.Link>
              <Nav.Link id="nav-free-consultation" eventKey="/home/consultation" href="/home/consultation">Free Consultation</Nav.Link>
              <Nav.Link id="nav-contact-us" eventKey="/home/contact" href="/home/contact">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
