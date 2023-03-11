import React from "react";
import Image from "next/image";

import styles from "styles/Home.module.scss";
import ThumbBox from "@/components/common/ThumbBox";
import SectionCLeft from "./left";
import SectionCRight from "./right";

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
        <SectionCLeft />
        <SectionCRight />
      </div>
    </div>
  </>
);

export default SectionC;
