import React from "react";
import Image from "next/image";

import Link from "next/link";
import styles from "styles/Home.module.scss";

const SectionA = () => (
  <>
    <div className="world-news">
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex position-relative  float-left">
            <h3 className="section-title">World News</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
          <div className="position-relative image-hover">
            <Image
              src="/images/cat.jpg"
              className={styles.imgFluid}
              alt="world-news"
              width={1200}
              height={630}
            />
            <span className="thumb-title">TRAVEL</span>
          </div>
          <h5 className="font-weight-bold mt-3">
            Refugees flood Turkey&#39;s border with Greece
          </h5>
          <p className="fs-15 font-weight-normal">
            Lorem Ipsum has been the industry&#39;s standard dummy text
          </p>
          <Link href="/" className="font-weight-bold text-dark pt-2">
            Read Article
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
          <div className="position-relative image-hover">
            <Image
              src="/images/london.jpg"
              className={styles.imgFluid}
              alt="world-news"
              width={1200}
              height={630}
            />
            <span className="thumb-title">NEWS</span>
          </div>
          <h5 className="font-weight-bold mt-3">
            South Korea’s Moon Jae-in sworn in vowing address
          </h5>
          <p className="fs-15 font-weight-normal">
            Lorem Ipsum has been the industry&#39;s standard dummy text
          </p>
          <a href="#" className="font-weight-bold text-dark pt-2">
            Read Article
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
          <div className="position-relative image-hover">
            <Image
              src="/images/sky.jpg"
              className={styles.imgFluid}
              alt="world-news"
              width={1200}
              height={630}
            />
            <span className="thumb-title">ART</span>
          </div>
          <h5 className="font-weight-bold mt-3">
            These puppies are training to assist in avalanche rescue
          </h5>
          <p className="fs-15 font-weight-normal">
            Lorem Ipsum has been the industry&#39;s standard dummy text
          </p>
          <a href="#" className="font-weight-bold text-dark pt-2">
            Read Article
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
          <div className="position-relative image-hover">
            <Image
              src="/images/table.jpg"
              className={styles.imgFluid}
              alt="world-news"
              width={1200}
              height={630}
            />
            <span className="thumb-title">BUSINESS</span>
          </div>
          <h5 className="font-weight-bold mt-3">
            &#39;Love Is Blind&#39; couple opens up about their first year
          </h5>
          <p className="fs-15 font-weight-normal">
            Lorem Ipsum has been the industry&#39;s standard dummy text
          </p>
          <a href="#" className="font-weight-bold text-dark pt-2">
            Read Article
          </a>
        </div>
      </div>
    </div>
  </>
);

export default SectionA;
