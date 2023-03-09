import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import styles from "/styles/Navbar.module.scss";
import SocialMedia from "./SocialMedia";

export default function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  function toggle() {
    setIsNavExpanded(!isNavExpanded);
  }
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var today = new Date();
  var date =
    days[today.getDay()].substring(0, 3) +
    ", " +
    months[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  return (
    <>
      <Navbar expand={false} className={styles.navigation}>
        <Navbar.Text className={styles.navLeft}>
          <ul className="navbar-left">
            <li>{date}</li>
            <li>30°C, London</li>
          </ul>
        </Navbar.Text>
        <Navbar.Brand href="/" className={`${styles.logo}`}>
          <Image
            src="/logo.gif"
            alt=""
            className="logo"
            width={670}
            height={150}
          />
        </Navbar.Brand>
        <Navbar.Text>
          <div className="d-flex">
            <ul className="navbar-right">
              <li>
                <a href="/en">ENGLISH</a>
              </li>
              <li>
                <a href="/zh-hk">繁體中文</a>
              </li>
            </ul>
            <SocialMedia />
          </div>
        </Navbar.Text>
        <Navbar.Toggle className={styles.navtoggle} onClick={() => toggle()}>
          <div
            className={
              isNavExpanded
                ? `${styles.hamBox} ${styles.hamBoxSpin}`
                : styles.hamBox
            }
          >
            <span
              className={
                isNavExpanded
                  ? `${styles.lineTop} ${styles.spinRight}`
                  : styles.lineTop
              }
            ></span>
            <span className={isNavExpanded ? `hide` : styles.lineTop}></span>
            <span
              className={
                isNavExpanded
                  ? `${styles.lineTop} ${styles.spinLeft}`
                  : styles.lineTop
              }
            ></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse className={styles.menu}>
          <Nav>
            <Nav.Link href="/" className={styles.menuItems}>
              Home
            </Nav.Link>
            <Nav.Link href="/article/News" className={styles.menuItems}>
              News
            </Nav.Link>
            <Nav.Link href="/article/Location" className={styles.menuItems}>
              Location
            </Nav.Link>
            <Nav.Link href="/article/Discount" className={styles.menuItems}>
              Discount
            </Nav.Link>
            <Nav.Link href="/article/Real-Estate" className={styles.menuItems}>
              Real Estate
            </Nav.Link>
            <Nav.Link href="/article/Cooking" className={styles.menuItems}>
              Cooking
            </Nav.Link>
            <Nav.Link href="/article/Education" className={styles.menuItems}>
              Education
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
