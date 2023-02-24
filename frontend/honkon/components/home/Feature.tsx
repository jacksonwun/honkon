import React from "react";
import BannerCarousel from "./Feature/BannerCarousel";
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = {loop: true}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Feature = () => (
    <div className="row">
    <div className="col-lg-8">
      <div className="owl-carousel owl-theme" id="main-banner-carousel">
        <BannerCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
    <div className="col-lg-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="py-3 border-bottom">
            <div className="d-flex align-items-center pb-2">
              <img
                src="assets/images/dashboard/Profile_1.jpg"
                className="img-xs img-rounded mr-2"
                alt="thumb"
              />
              <span className="fs-12 text-muted">Henry Itondo</span>
            </div>
            <p className="fs-14 m-0 font-weight-medium line-height-sm">
              The Most And Least Visited Countries In The World
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="py-3 border-bottom">
            <div className="d-flex align-items-center pb-2">
              <img
                src="assets/images/dashboard/Profile_2.jpg"
                className="img-xs img-rounded mr-2"
                alt="thumb"
              />
              <span className="fs-12 text-muted">Oka Tomoaki</span>
            </div>
            <p className="fs-14 m-0 font-weight-medium line-height-sm">
              The Best Places to Travel in month August
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="pt-4 pb-4 border-bottom">
            <div className="d-flex align-items-center pb-2">
              <img
                src="assets/images/dashboard/Profile_2.jpg"
                className="img-xs img-rounded mr-2"
                alt="thumb"
              />
              <span className="fs-12 text-muted">Joana Leite</span>
            </div>
            <p className="fs-14 m-0 font-weight-medium line-height-sm">
              Focus On Fun And Challenging Lifetime Activities
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="pt-3 pb-4 border-bottom">
            <div className="d-flex align-items-center pb-2">
              <img
                src="assets/images/dashboard/Profile_4.jpg"
                className="img-xs img-rounded mr-2"
                alt="thumb"
              />
              <span className="fs-12 text-muted">Rita Leite</span>
            </div>
            <p className="fs-14 m-0 font-weight-medium line-height-sm">
              Bread Is The Most Widely Consumed Food In The World
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="pt-4 pb-4">
            <div className="d-flex align-items-center pb-2">
              <img
                src="assets/images/dashboard/Profile_5.jpg"
                className="img-xs img-rounded mr-2"
                alt="thumb"
              />
              <span className="fs-12 text-muted">Jurrien Oldhof</span>
            </div>
            <p className="fs-14 m-0 font-weight-medium line-height-sm">
              What Is Music, And What Does It Mean To Us
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="pt-3 pb-4">
            <div className="d-flex align-items-center pb-2">
              <img
                src="assets/images/dashboard/Profile_6.jpg"
                className="img-xs img-rounded mr-2"
                alt="thumb"
              />
              <span className="fs-12 text-muted">Yamaha Toshinobu</span>
            </div>
            <p className="fs-14 m-0 font-weight-medium line-height-sm">
              Is Breakfast The Most Important Meal Of The Day
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feature;