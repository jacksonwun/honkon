import React from "react";
import Image from "next/image";

import styles from "styles/Article.module.scss";
import { ThumbBoxWithDes } from "@/lib/type/thumbBoxType";
import Link from "next/link";

const ThumbBoxLarge = ({ cat, title, picURL, slug, des }: ThumbBoxWithDes) => {
  return (
    <Link
      className={`col-sm-3 mb-5 mb-sm-2 ${styles.thumbBox}`}
      href={`${cat}/${slug}`}
    >
      <div className="position-relative image-hover">
        <Image
          src="/images/cat.jpg"
          alt="news"
          className="img-fluid"
          width={1200}
          height={630}
        />
        <span className="thumb-title">POLITICS</span>
      </div>
      <h1 className="font-weight-600 mt-3">
        Melania Trump speaks about courage at State Department
      </h1>
      <p className="fs-15 font-weight-normal">
        Lorem Ipsum has been the industry&#39;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
      </p>
    </Link>
  );
};

export default ThumbBoxLarge;
