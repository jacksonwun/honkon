import React from "react";
import Image from "next/image";

import styles from "styles/Article.module.scss";
import { ThumbBoxWithDes } from "@/lib/type/thumbBoxType";
import Link from "next/link";

const ThumbBoxWithDes = ({
  cat,
  title,
  picURL,
  slug,
  des,
}: ThumbBoxWithDes) => {
  return (
    <Link className={`${styles.thumbBox}`} href={`${cat}/${slug}`}>
      <div className="position-relative image-hover">
        <Image
          loader={() => picURL}
          src={picURL}
          className="img-fluid"
          alt={cat}
          width={1200}
          height={630}
        />
        <span className="thumb-title">{cat}</span>
      </div>
      <h5 className="font-weight-600 mt-3">{title}</h5>
      <p className={styles.thumbBoxDes}>{des}</p>
    </Link>
  );
};

export default ThumbBoxWithDes;
