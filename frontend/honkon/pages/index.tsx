import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { BrowserRouter as Router } from '@types/react-router-dom';

import Banner from '@/components/home/Banner';
import Feature from '@/components/home/Feature';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="container">
          <Banner />
          <Feature />
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
                  <img
                    src="assets/images/dashboard/travel.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">TRAVEL</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  Refugees flood Turkey's border with Greece
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
              <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/news.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">NEWS</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
              <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/art.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">ART</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  These puppies are training to assist in avalanche rescue
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
              <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/business.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">BUSINESS</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  'Love Is Blind' couple opens up about their first year
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2"
                  >Read Article</a
                >
              </div>
            </div>
          </div>
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
                  <img
                    src="assets/images/dashboard/glob.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">NEWS</span>
                </div>
                <h1 className="font-weight-600 mt-3">
                  Melania Trump speaks about courage at State Department
                </h1>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and
                </p>
              </div>
              <div className="col-lg-6  mb-5 mb-sm-2">
                <div className="row">
                  <div className="col-sm-6  mb-5 mb-sm-2">
                    <div className="position-relative image-hover">
                      <img
                        src="assets/images/dashboard/star-magazine-5.jpg"
                        className="img-fluid"
                        alt="world-news"
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
                      <img
                        src="assets/images/dashboard/star-magazine-6.jpg"
                        className="img-fluid"
                        alt="world-news"
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
                      <img
                        src="assets/images/dashboard/star-magazine-7.jpg"
                        className="img-fluid"
                        alt="world-news"
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
                      <img
                        src="assets/images/dashboard/star-magazine-8.jpg"
                        className="img-fluid"
                        alt="world-news"
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
                  <div className="col-sm-4  mb-5 mb-sm-2">
                    <div className="position-relative image-hover">
                      <img
                        src="assets/images/dashboard/star-magazine-9.jpg"
                        className="img-fluid"
                        alt="world-news"
                      />
                      <span className="thumb-title">LIFESTYLE</span>
                    </div>
                    <h5 className="font-weight-600 mt-3">
                      The island country that gave Mayor Pete his name
                    </h5>
                  </div>
                  <div className="col-sm-4 mb-5 mb-sm-2">
                    <div className="position-relative image-hover">
                      <img
                        src="assets/images/dashboard/star-magazine-10.jpg"
                        className="img-fluid"
                        alt="world-news"
                      />
                      <span className="thumb-title">SPORTS</span>
                    </div>
                    <h5 className="font-weight-600 mt-3">
                      Disney parks expand (good) vegan food options
                    </h5>
                  </div>
                  <div className="col-sm-4 mb-5 mb-sm-2">
                    <div className="position-relative image-hover">
                      <img
                        src="assets/images/dashboard/star-magazine-11.jpg"
                        className="img-fluid"
                        alt="world-news"
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
                      <img
                        src="assets/images/dashboard/star-magazine-12.jpg"
                        className="img-fluid"
                        alt="world-news"
                      />
                      <span className="thumb-title">NEWS</span>
                    </div>
                    <h5 className="font-weight-600 mt-3">
                      Japanese chef carves food into incredible pieces of art
                    </h5>
                  </div>
                  <div className="col-sm-4 mb-5 mb-sm-2">
                    <div className="position-relative image-hover">
                      <img
                        src="assets/images/dashboard/star-magazine-13.jpg"
                        className="img-fluid"
                        alt="world-news"
                      />
                      <span className="thumb-title">NEWS</span>
                    </div>
                    <h5 className="font-weight-600 mt-3">
                      The Misanthrope Society: A Taipei bar for people who
                    </h5>
                  </div>
                  <div className="col-sm-4 mb-5 mb-sm-2">
                    <div className="position-relative image-hover">
                      <img
                        src="assets/images/dashboard/star-magazine-14.jpg"
                        className="img-fluid"
                        alt="world-news"
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
                  <img
                    src="assets/images/dashboard/star-magazine-15.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <div className="video-thumb text-muted">
                    <span><i className="mdi mdi-menu-right"></i></span>LIVE
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
        </div>
    </>
  )
}
