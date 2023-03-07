import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR, { Fetcher } from "swr";
import Link from "next/link";
import Image from "next/image";
import { fetcher } from "../../../lib/utils/fetcher";

import ThumbBox from "@/components/common/ThumbBox";
import ThumbBoxWithDes from "@/components/common/ThimbBoxWithDes";
import ThumbBoxLarge from "@/components/common/ThumbBoxLarge";

import ArticleAPI from "../../../lib/api/article";
import styles from "styles/Article.module.scss";
import { ARTICLE_QUERY_MAP } from "../../../lib/utils/constant";
import { getQuery } from "../../../lib/utils/getQuery";
import { ICategory } from "@/lib/type/articleType";

const CategoryPage = (initialCategory: any) => {
  const router = useRouter();
  const category = router.query.category as string;
  const limit = 10;
  const page = 1;

  const { data: fetchedArticle } = useSWR(
    `http://localhost:8000/articles/discount`,
    fetcher
  );

  const data: ICategory = fetchedArticle || initialCategory;

  const ThumbDesHtml = (num: number) => {
    return (
      <ThumbBoxWithDes
        cat={data ? data["category"][num]["category"] : ""}
        title={data ? data["category"][num]["title"] : ""}
        picURL={data ? data["category"][num]["pic"] : ""}
        slug="japan-cancels-cherry-blossom"
        des={data ? data["category"][num]["caption"] : ""}
      />
    );
  };

  const ThumbHtml = (num: number) => {
    return (
      <ThumbBox
        cat={data ? data["category"][num]["category"] : ""}
        catSlug={data ? data["category"][num]["category_slug"] : ""}
        title={data ? data["category"][num]["title"] : ""}
        picURL={data ? data["category"][num]["pic"] : ""}
        slug={data ? data["category"][num]["slug"] : ""}
        des={null}
      />
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <h1 className="text-center mt-5">Category List: {category}</h1>
            <p className="text-secondary fs-15">
              This text can be added in the category Description field in
              dashboard
            </p>
          </div>
          <h5 className="text-muted font-weight-medium mb-3">World News</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <ThumbBoxLarge
            cat={data ? data["category"][0]["category"] : ""}
            title={data ? data["category"][0]["title"] : ""}
            picURL={data ? data["category"][0]["pic"] : ""}
            slug="japan-cancels-cherry-blossom"
            des={data ? data["category"][0]["caption"] : ""}
          />
        </div>
        <div className="col-lg-5">
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(0)}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(1)}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(2)}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(3)}</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          <h5 className="text-muted font-weight-medium mb-3">Popular News</h5>
        </div>
      </div>
      <div className="row">
        <ul className={styles.thumbBoxTable}>
          <li className={styles.thumbBoxList}>{ThumbHtml(0)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(1)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(2)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(3)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(0)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(1)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(2)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(3)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(0)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(1)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(2)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(3)}</li>
        </ul>
      </div>
    </div>
  );
};

CategoryPage.getInitialProps = async ({
  query: { category, page, limit },
}: any) => {
  const { data } = await ArticleAPI.byCategory(category, page, limit);
  return data;
};

export default CategoryPage;
