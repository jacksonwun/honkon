import React from "react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import Link from "next/link";

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
              <Link href="pages/news-post.html">News</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/article/london">World</Link>
            </li>
            <li>
              <Link href="/article/london">Magazine</Link>
            </li>
            <li>
              <Link href="/article/london">Business</Link>
            </li>
            <li>
              <Link href="/article/london">London</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-6">
          <ul className="footer-vertical-nav">
            <li className="menu-title">
              <Link href="/">More</Link>
            </li>
            <li>
              <Link href="/">RSS</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">User Agreement</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
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
