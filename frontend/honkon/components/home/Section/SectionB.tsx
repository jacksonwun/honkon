import React from "react";
import Image from "next/image";

import styles from "styles/Home.module.scss";

const SectionB = () => (
  <>
    <div className="editors-news">
      <div className="row">
        <div className="col-lg-3">
          <div className="d-flex position-relative float-left">
            <h3 className="section-title">Popular News</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6  mb-5 mb-sm-2">
          <div className="position-relative image-hover">
            <Image
              src="/images/cat.jpg"
              className={styles.imgFluid}
              alt="world-news"
              width={1200}
              height={630}
            />
            <span className="thumb-title">NEWS</span>
          </div>
          <h1 className="font-weight-600 mt-3">
            Melania Trump speaks about courage at State Department
          </h1>
          <p className="fs-15 font-weight-normal">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
          </p>
        </div>
        <div className="col-lg-6  mb-5 mb-sm-2">
          <div className="row">
            <div className="col-sm-6  mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <Image
                  src="/images/cat.jpg"
                  className={styles.imgFluid}
                  alt="world-news"
                  width={1200}
                  height={630}
                />
                <span className="thumb-title">POLITICS</span>
              </div>
              <h5 className="font-weight-600 mt-3">
                A look at California's eerie plane graveyards
              </h5>
              <p className="fs-15 font-weight-normal">
                Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
            <div className="col-sm-6  mb-5 mb-sm-2">
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
              <h5 className="font-weight-600 mt-3">
                The world's most beautiful racecourses
              </h5>
              <p className="fs-15 font-weight-normal">
                Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6  mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <Image
                  src="/images/cat.jpg"
                  className={styles.imgFluid}
                  alt="world-news"
                  width={1200}
                  height={630}
                />
                <span className="thumb-title">POLITICS</span>
              </div>
              <h5 className="font-weight-600 mt-3">
                Japan cancels cherry blossom festivals over virus fears
              </h5>
              <p className="fs-15 font-weight-normal">
                Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
            <div className="col-sm-6">
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
              <h5 className="font-weight-600 mt-3">
                Classic cars reborn as electric vehicles
              </h5>
              <p className="fs-15 font-weight-normal">
                Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SectionB;
