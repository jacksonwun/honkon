import React from "react";
import Image from "next/image";

import styles from "styles/Article.module.scss";
import { ThumbBox } from "@/lib/type/thumbBoxType";
import { ThumbBoxWithDes } from "@/lib/type/thumbBoxType";

import Link from "next/link";

const ThumbBox = ({
  cat,
  catSlug,
  title,
  picURL,
  slug,
  des = null,
}: ThumbBox) => {
  return (
    <Link
      className={`col-sm-3 mb-5 mb-sm-2 ${styles.thumbBox}`}
      href={`${catSlug}/${slug}`}
    >
      <div className="position-relative image-hover">
        <Image
          loader={() => picURL}
          src={picURL}
          alt={cat}
          className={`img-fluid ${styles.thumbBoxImage}`}
          width={1200}
          height={630}
          unoptimized={true}
        />
        <span className={`thumb-title ${styles.capitalize}`}>{cat}</span>
      </div>
      <h5 className={`font-weight-600 mt-3`}>{title}</h5>
      {des ? <p className={styles.thumbBoxDes}>{des}</p> : <></>}
    </Link>
  );
};

export default ThumbBox;
