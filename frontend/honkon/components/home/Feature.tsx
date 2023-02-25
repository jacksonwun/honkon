import React from "react";
import BannerCarousel from "./Feature/BannerCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

import FeatureBlogList from "./Feature/FeatureBlogList";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Feature = () => (
  <div className="row">
    <div className="col-lg-8">
      <div className="owl-carousel owl-theme" id="main-banner-carousel">
        <BannerCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
    <div className="col-lg-4">
      <FeatureBlogList />
    </div>
  </div>
);

export default Feature;
