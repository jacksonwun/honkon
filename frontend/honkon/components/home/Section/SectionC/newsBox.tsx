import React, { useState } from "react";
import Image from "next/image";

import styles from "styles/Home.module.scss";
import { INewsBox } from "@/lib/type/articleType";

import Link from "next/link";
import { Tooltip } from "@mui/material";

const NewsBox = ({ cat, catSlug, title, slug, timestamp, index }: INewsBox) => {
  const newsBoxCss = "pt-4";
  return (
    <Link
      className={`col-sm-12 ${styles.noDecoration}`}
      //   href={`/article/${catSlug}/${slug}`}
      href={`/article/${catSlug}`}
    >
      <div className={`${index != 0 ? "" : { newsBoxCss }}`}>
        <div className={`border-bottom pb-3`}>
          <h5 className="font-weight-600 mt-2 mb-0 fs-5">{title}</h5>
          <p className="text-color m-0 d-flex align-items-center">
            <span className="fs-10 mr-1">{timestamp}</span>
            <i className="mdi mdi-bookmark-outline mr-3"></i>
            {/* <span className="fs-10 mr-1">126</span> */}
            <i className="mdi mdi-comment-outline"></i>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsBox;
