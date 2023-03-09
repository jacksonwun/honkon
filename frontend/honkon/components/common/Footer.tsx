import React from "react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="border-top"></div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <ul className="footer-vertical-nav">
            <li className="menu-title">
              <a href="pages/news-post.html">News</a>
            </li>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="pages/world.html">World</a>
            </li>
            <li>
              <a href="pages/author.html">Magazine</a>
            </li>
            <li>
              <a href="pages/business.html">Business</a>
            </li>
            <li>
              <a href="pages/politics.html">Politics</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-6">
          <ul className="footer-vertical-nav">
            <li className="menu-title">
              <a href="#">More</a>
            </li>
            <li>
              <a href="#">RSS</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">User Agreement</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="pages/aboutus.html">About us</a>
            </li>
            <li>
              <a href="pages/contactus.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex justify-content-center">
            <Image
              src="/logo.gif"
              alt=""
              className="logo justify-content-start"
              width={150}
              height={150}
            />

            <div className="d-flex justify-content-end footer-social">
              <h5 className="m-0 font-weight-600 mr-3 d-none d-lg-flex">
                Follow on
              </h5>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom">
            <ul className="footer-horizontal-menu">
              <li>
                <a href="#">Terms of Use.</a>
              </li>
              <li>
                <a href="#">Privacy Policy.</a>
              </li>
              <li>
                <a href="#">AdChoices.</a>
              </li>
            </ul>
            <p className="font-weight-medium">
              © 2023
              <a href="/" className="text-dark">
                @ Honkon.life
              </a>
              , Inc.All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
