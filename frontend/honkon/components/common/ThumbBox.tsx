import React, { useState } from "react";
import Image from "next/image";

import styles from "styles/Article.module.scss";
import { ThumbBox } from "@/lib/type/thumbBoxType";
import { ThumbBoxWithDes } from "@/lib/type/thumbBoxType";

import Link from "next/link";
import { Tooltip } from "@mui/material";

const ThumbBox = ({
  cat,
  catSlug,
  title,
  picURL,
  slug,
  des = null,
  isLarge = null,
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
          className={`img-fluid ${
            isLarge ? styles.thumbBoxLargeImage : styles.thumbBoxImage
          }`}
          width={1200}
          height={630}
          unoptimized={true}
        />
        <span className={`thumb-title ${styles.capitalize}`}>{cat}</span>
      </div>
      <Tooltip title={title}>
        <h5
          className={`mt-2 ${
            isLarge ? styles.thumbBoxLargeTitle : styles.thumbBoxTitle
          }`}
        >
          {title}
        </h5>
      </Tooltip>

      {des ? (
        <Tooltip title={des}>
          <p
            className={isLarge ? styles.thumbBoxLargeTitle : styles.thumbBoxDes}
          >
            {des}
          </p>
        </Tooltip>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default ThumbBox;
