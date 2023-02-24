import React from "react";

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from '/styles/Navbar.module.scss'

export default function Navigation(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  function toggle(){
    setIsNavExpanded(!isNavExpanded);
  }

  return (
  <>
    <Navbar expand={false} className={styles.navigation}>
      <Navbar.Text className={styles.navLeft}>
        <ul className="navbar-left">
          <li>Wed, March 4, 2020</li>
          <li>30°C,London</li>
        </ul>
      </Navbar.Text>
      <Navbar.Brand href="/" className={`${styles.logo}`}>
        <img src="/logo.png" alt="" className="logo" />
      </Navbar.Brand>
      <Navbar.Text>
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
              <FontAwesomeIcon className={styles.socialMediaIcon} icon={faFacebook} href="/"/>
            </li>
            <li>
              <FontAwesomeIcon className={styles.socialMediaIcon} icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon className={styles.socialMediaIcon} icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon className={styles.socialMediaIcon} icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon className={styles.socialMediaIcon} icon={faYoutube} />
            </li>
          </ul>
        </div>
      </Navbar.Text>      
      <Navbar.Toggle className={styles.navtoggle} onClick={()=>toggle()}>
        <div className={isNavExpanded ? `${styles.hamBox} ${styles.hamBoxSpin}` : styles.hamBox}>
          <span className={isNavExpanded ? `${styles.lineTop} ${styles.spinRight}` : styles.lineTop}></span>
          <span className={isNavExpanded ? `hide` : styles.lineTop}></span>
          <span className={isNavExpanded ? `${styles.lineTop} ${styles.spinLeft}` : styles.lineTop}></span>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse className={styles.menu}>
        <Nav>
          <Nav.Link href="#home" className={styles.menuItems} >Home</Nav.Link>
          <Nav.Link href="#link" className={styles.menuItems} >News</Nav.Link>
          <Nav.Link href="#link" className={styles.menuItems} >Location</Nav.Link>
          <Nav.Link href="#link" className={styles.menuItems} >Discount</Nav.Link>
          <Nav.Link href="#link" className={styles.menuItems} >Real Estate</Nav.Link>
          <Nav.Link href="#link" className={styles.menuItems} >Cooking</Nav.Link>
          <Nav.Link href="#link" className={styles.menuItems} >Education</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  </>
  )
};