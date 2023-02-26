import React from "react";
import Image from "next/image";

import styles from "styles/Article.module.scss";
import { ThumbBox } from "@/lib/type/thumbBoxType";
import Link from "next/link";

const ThumbBox = ({ cat, title, picURL, slug }: ThumbBox) => {
  return (
    <Link
      className={`col-sm-3 mb-5 mb-sm-2 ${styles.thumbBox}`}
      href={`${cat}/${slug}`}
    >
      <div className="position-relative image-hover">
        <Image
          loader={() => picURL}
          src={picURL}
          alt="news"
          className="img-fluid"
          width={1200}
          height={630}
        />
        <span className="thumb-title">{cat}</span>
      </div>
      <h5 className="font-weight-600 mt-3">{title}</h5>
    </Link>
  );
};

export default ThumbBox;
