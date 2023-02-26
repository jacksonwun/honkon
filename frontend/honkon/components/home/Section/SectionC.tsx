import React from "react";
import Image from "next/image";

import styles from "styles/Home.module.scss";

const SectionC = () => (
  <>
    <div className="popular-news">
      <div className="row">
        <div className="col-lg-3">
          <div className="d-flex position-relative float-left">
            <h3 className="section-title">Editor choice</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-sm-4 mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <Image
                  src="/images/cat.jpg"
                  className={styles.imgFluid}
                  alt="world-news"
                  width={1200}
                  height={630}
                />
                <span className="thumb-title">LIFESTYLE</span>
              </div>
              <h5 className="font-weight-600 mt-3">
                The island country that gave Mayor Pete his name
              </h5>
            </div>
            <div className="col-sm-4 mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <Image
                  src="/images/cat.jpg"
                  className={styles.imgFluid}
                  alt="world-news"
                  width={1200}
                  height={630}
                />
                <span className="thumb-title">SPORTS</span>
              </div>
              <h5 className="font-weight-600 mt-3">
                Disney parks expand (good) vegan food options
              </h5>
            </div>
            <div className="col-sm-4 mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <Image
                  src="/images/cat.jpg"
                  className={styles.imgFluid}
                  alt="world-news"
                  width={1200}
                  height={630}
                />
                <span className="thumb-title">INTERNET</span>
              </div>
              <h5 className="font-weight-600 mt-3">
                A hot springs where clothing is optional after dark
              </h5>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4 mb-5 mb-sm-2">
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
              <h5 className="font-weight-600 mt-3">
                Japanese chef carves food into incredible pieces of art
              </h5>
            </div>
            <div className="col-sm-4 mb-5 mb-sm-2">
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
              <h5 className="font-weight-600 mt-3">
                The Misanthrope Society: A Taipei bar for people who
              </h5>
            </div>
            <div className="col-sm-4 mb-5 mb-sm-2">
              <div className="position-relative image-hover">
                <Image
                  src="/images/cat.jpg"
                  className={styles.imgFluid}
                  alt="world-news"
                  width={1200}
                  height={630}
                />
                <span className="thumb-title">TOURISM</span>
              </div>
              <h5 className="font-weight-600 mt-3">
                From Pakistan to the Caribbean: Curry's journey
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="position-relative mb-3">
            <Image
              src="/images/cat.jpg"
              className={styles.imgFluid}
              alt="world-news"
              width={1200}
              height={630}
            />
            <div className="video-thumb text-muted">
              <span>
                <i className="mdi mdi-menu-right"></i>
              </span>
              LIVE
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="d-flex position-relative float-left">
                <h3 className="section-title">Latest News</h3>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="border-bottom pb-3">
                <h5 className="font-weight-600 mt-0 mb-0">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p className="text-color m-0 d-flex align-items-center">
                  <span className="fs-10 mr-1">2 hours ago</span>
                  <i className="mdi mdi-bookmark-outline mr-3"></i>
                  <span className="fs-10 mr-1">126</span>
                  <i className="mdi mdi-comment-outline"></i>
                </p>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="border-bottom pt-4 pb-3">
                <h5 className="font-weight-600 mt-0 mb-0">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p className="text-color m-0 d-flex align-items-center">
                  <span className="fs-10 mr-1">2 hours ago</span>
                  <i className="mdi mdi-bookmark-outline mr-3"></i>
                  <span className="fs-10 mr-1">126</span>
                  <i className="mdi mdi-comment-outline"></i>
                </p>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="border-bottom pt-4 pb-3">
                <h5 className="font-weight-600 mt-0 mb-0">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p className="text-color m-0 d-flex align-items-center">
                  <span className="fs-10 mr-1">2 hours ago</span>
                  <i className="mdi mdi-bookmark-outline mr-3"></i>
                  <span className="fs-10 mr-1">126</span>
                  <i className="mdi mdi-comment-outline"></i>
                </p>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="pt-4">
                <h5 className="font-weight-600 mt-0 mb-0">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p className="text-color m-0 d-flex align-items-center">
                  <span className="fs-10 mr-1">2 hours ago</span>
                  <i className="mdi mdi-bookmark-outline mr-3"></i>
                  <span className="fs-10 mr-1">126</span>
                  <i className="mdi mdi-comment-outline"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SectionC;
