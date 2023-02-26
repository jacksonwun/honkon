import React from "react";
import Image from "next/image";

import styles from "styles/home/feature/featureblog.module.scss";

const ArticleMeta = ({ slug }) => {
  return (
    <>
      <div className="news-post-wrapper">
        <div className="news-post-wrapper-sm ">
          <h1 className="text-center">Article: {slug}</h1>
          <div className="text-center">
            <a href="#" className="btn btn-dark font-weight-bold mb-4">
              News
            </a>
          </div>
          <p className="fs-15 d-flex justify-content-center align-items-center m-0">
            <Image
              src="/images/cat.jpg"
              alt=""
              className="img-xs img-rounded mr-2"
              width={1200}
              height={630}
            />
            Oka Tomoaki | 23 February, 2018
          </p>
          <p className="pt-4 pb-4">
            He has led a remarkable campaign, defying the traditional mainstream
            parties courtesy of his En Marche! movement. For many, however, the
            campaign has become less about backing Macron and instead about
            voting against Le Pen, the National Front candidate.
          </p>
        </div>
        <Image
          src="/images/cat.jpg"
          alt="news"
          className="img-fluid mb-4"
          width={1200}
          height={630}
        />
        <div className="news-post-wrapper-sm ">
          <p className="pt-4 pb-4 mb-4">
            He has led a remarkable campaign, defying the traditional mainstream
            parties courtesy of his En Marche! movement. For many, however, the
            campaign has become less about backing Macron and instead about
            voting against Le Pen, the National Front candidate.
          </p>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6">
            <Image
              src="/images/cat.jpg"
              alt="news"
              className="img-fluid mb-4"
              width={1200}
              height={630}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="font-weight-600 mt-5">
              TravelTips: How Do I Live On The Cheap?
            </h1>
            <p>
              He has led a remarkable campaign, defying the traditional
              mainstream parties courtesy of his En Marche! movement. For many,
              however, the campaign has become less about backing Macron and
              instead about voting against Le Pen, the National Front candidate.
            </p>
          </div>
        </div>
        <div className="news-post-wrapper-sm mb-4">
          <p>
            He has led a remarkable campaign, defying the traditional mainstream
            parties courtesy of his En Marche! movement. For many, however, the
            campaign has become less about backing Macron and instead about
            voting against Le Pen, the National Front candidate.
          </p>
          <div className="bg-dark border-radius-6 px-4 py-3 mt-4">
            <p className="text-white font-weight-medium">
              He has led a remarkable campaign, defying the traditional
              mainstream parties courtesy of his En Marche! movement. For many,
              however, the campaign has become less about backing Macron and
              instead about voting against Le Pen, the National Front candidate.
            </p>
          </div>
          <h1 className="mt-5 pt-5 font-weight-600 mb-4 pb-1">
            How long will your trip be?
          </h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Image
              src="/images/cat.jpg"
              alt="news"
              className="img-fluid"
              width={1200}
              height={630}
            />
          </div>
          <div className="col-sm-6">
            <Image
              src="/images/cat.jpg"
              alt="news"
              className="img-fluid"
              width={1200}
              height={630}
            />
          </div>
        </div>
        <div className="news-post-wrapper-sm mt-5">
          <p>
            Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut
            imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.
            Aliquam erat volutpat. Suspendisse vulputate porttitor mentum. Proin
            viverra orci a leo suscipit placerat. Sed feugiat posuere semper.
            Cras vitae mi erat, Vestibulum faucibus neque at lacus tristique eu
            ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada
            pellentesque, platea dictumst.
          </p>
          <p className="mb-5">
            Proin viverra orci a leo suscipit placerat. Sed feugiat posuere
            semper. Cras vitae mi erat, Vestibulum faucibus neque at lacus
            tristique eu ultrices ipsum mollis. Phasellus venenatis, platea
            dictumst.
          </p>
          <div className="text-center pb-5 mb-5 border-bottom">
            <a
              href="#"
              className="btn btn-dark font-weight-bold mr-2 mb-2 mb-sm-0"
            >
              News
            </a>
            <a
              href="#"
              className="btn btn-dark font-weight-bold mr-2 mb-2 mb-sm-0"
            >
              News
            </a>
            <a
              href="#"
              className="btn btn-dark font-weight-bold mr-2 mb-2 mb-sm-0"
            >
              News
            </a>
            <a
              href="#"
              className="btn btn-dark font-weight-bold mr-2 mb-2 mb-sm-0"
            >
              News
            </a>
            <a
              href="#"
              className="btn btn-dark font-weight-bold mr-2 mb-2 mb-sm-0"
            >
              News
            </a>
          </div>
          <div className="text-center">
            <Image
              src="/images/cat.jpg"
              alt="news"
              className="img-lg img-rounded img-fluid mb-3"
              width={1200}
              height={630}
            />
            <p className="fs-12 mb-1">Of the Author</p>
            <p className="fs-12 font-weight-medium mb-2">Nout Golstein</p>
          </div>
          <p className="px-5 mb-5">
            Odit ut quidem impedit sequi autem ut. Consequatur vel nesciunt ut
            perspiciatis omnis praesentium eos. Consequatur maiores laboriosam
            consequatur ea minus corrupti ... More
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleMeta;
