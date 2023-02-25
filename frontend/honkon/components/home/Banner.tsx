import React from "react";
import Image from "next/image";

const Banner = () => (
  <div className="banner-top-thumb-wrap">
    <div className="d-lg-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between  mb-3 mb-lg-0">
        <div>
          <Image
            src="/assets/images/dashboard/star-magazine-1.jpg"
            alt="thumb"
            className="banner-top-thumb"
            width={150}
            height={150}
          />
        </div>
        <h5 className="m-0 font-weight-bold">The morning after: What people</h5>
      </div>
      <div className="d-flex justify-content-between mb-3 mb-lg-0">
        <div>
          <Image
            src="/assets/images/dashboard/star-magazine-2.jpg"
            alt="thumb"
            className="banner-top-thumb"
            width={150}
            height={150}
          />
        </div>
        <h5 className="m-0 font-weight-bold">How Hungary produced the</h5>
      </div>
      <div className="d-flex justify-content-between mb-3 mb-lg-0">
        <div>
          <Image
            src="/assets/images/dashboard/star-magazine-3.jpg"
            alt="thumb"
            className="banner-top-thumb"
            width={150}
            height={150}
          />
        </div>
        <h5 className="m-0 font-weight-bold">
          A sleepy island paradise&#39;s most
        </h5>
      </div>
      <div className="d-flex justify-content-between mb-3 mb-lg-0">
        <div>
          <Image
            src="/assets/images/dashboard/star-magazine-4.jpg"
            alt="thumb"
            className="banner-top-thumb"
            width={150}
            height={150}
          />
        </div>
        <h5 className="m-0 font-weight-bold">
          America&#39;s most popular national
        </h5>
      </div>
    </div>
  </div>
);

export default Banner;
