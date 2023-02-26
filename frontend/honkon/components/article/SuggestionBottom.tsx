import React from "react";
import Image from "next/image";

import styles from "styles/Article.module.scss";

const SuggestionBottom = () => (
  <div className={styles.suggestionBottom}>
    <h1 className="font-weight-600 text-center mb-5">You may also like</h1>

    <div className="border-top py-5">
      <div className="row">
        <div className="col-sm-4">
          <div className="position-relative image-hover">
            <Image
              src="/images/cat.jpg"
              alt="news"
              className="img-fluid"
              width={1200}
              height={630}
            />
            <span className="thumb-title">NEWS</span>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="position-relative image-hover">
            <h1 className="font-weight-600">
              A hot springs where clothing is optional after dark
            </h1>
            <p className="fs-15">Oka Tomoaki | 23 February, 2018</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top py-5">
      <div className="row">
        <div className="col-sm-4">
          <div className="position-relative image-hover">
            <Image
              src="/images/cat.jpg"
              alt="news"
              className="img-fluid"
              width={1200}
              height={630}
            />
            <span className="thumb-title">NEWS</span>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="position-relative image-hover">
            <h1 className="font-weight-600">
              A hot springs where clothing is optional after dark
            </h1>
            <p className="fs-15">Oka Tomoaki | 23 February, 2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SuggestionBottom;
