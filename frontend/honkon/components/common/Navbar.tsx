import React from "react";

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

import Nav from 'react-bootstrap/Nav';
import NavbarReact from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navbar(){
  const [showMobileSidebar, setMobileSidebar] = useState(false)
  const toggleLibrary = () => setMobileSidebar(!showMobileSidebar)

  return (
  <>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="d-flex justify-content-between align-items-center navbar-top">
          <ul className="navbar-left">
            <li>Wed, March 4, 2020</li>
            <li>30°C,London</li>
          </ul>
          <div>
            <a className="navbar-brand" href="#"
              ><img src="assets/images/logo.svg" alt=""
            /></a>
          </div>
          <div className="d-flex">
            <ul className="navbar-right">
              <li>
                <a href="#">ENGLISH</a>
              </li>
              <li>
                <a href="#">繁體中文</a>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <NavbarReact className="navbar-bottom-menu">
          <NavbarReact.Brand href="#home">React-Bootstrap</NavbarReact.Brand>
          <NavbarReact.Toggle aria-controls="basic-navbar-nav">aaa</NavbarReact.Toggle>
          <NavbarReact.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarReact.Collapse>
        </NavbarReact>
      </nav>
    </div>
  </>
  )
};