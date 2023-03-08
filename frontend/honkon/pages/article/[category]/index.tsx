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
import { ARTICLE_QUERY_MAP,  SERVER_BASE_URL, } from "../../../lib/utils/constant";
import { getQuery } from "../../../lib/utils/getQuery";
import { ICategory, IthumbBox } from "@/lib/type/articleType";


const CategoryPage = (initialCategory: any) => {
  const router = useRouter();
  const category = router.query.category as string;
  const locale = router.query.locale as string;

  const { data: fetchedArticle } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/${category}/`,
    fetcher
  );

  const data: ICategory = fetchedArticle || initialCategory;
  console.log(data)

  function RadomNumber() {
    return data["category"].length
  }

  const ThumbLargeHtml = (thumbBoxJson: IthumbBox) => {
    return (
      <ThumbBox
      cat={thumbBoxJson ? thumbBoxJson["category"] : ""}
      catSlug={thumbBoxJson ? thumbBoxJson["category_slug"] : ""}
      slug={thumbBoxJson ? thumbBoxJson["slug"] : ""}
      
      title={thumbBoxJson ? thumbBoxJson["title"] : ""}
      des={thumbBoxJson ? thumbBoxJson["caption"] : ""}        
      picURL={thumbBoxJson ? thumbBoxJson["pic"] : ""}
        isLarge={true}
      />
    );
  };

  const ThumbDesHtml = (thumbBoxJson: IthumbBox) => {
    return (
      <ThumbBox
        cat={thumbBoxJson ? thumbBoxJson["category"] : ""}
        catSlug={thumbBoxJson ? thumbBoxJson["category_slug"] : ""}
        slug={thumbBoxJson ? thumbBoxJson["slug"] : ""}
        
        title={thumbBoxJson ? thumbBoxJson["title"] : ""}
        des={thumbBoxJson ? thumbBoxJson["caption"] : ""}        
        picURL={thumbBoxJson ? thumbBoxJson["pic"] : ""}
        isLarge={null}
      />
    );
  };

  const ThumbHtml = (thumbBoxJson: IthumbBox) => {
    return (
      <ThumbBox
      cat={thumbBoxJson ? thumbBoxJson["category"] : ""}
      catSlug={thumbBoxJson ? thumbBoxJson["category_slug"] : ""}
      slug={thumbBoxJson ? thumbBoxJson["slug"] : ""}
      
      title={thumbBoxJson ? thumbBoxJson["title"] : ""}       
      picURL={thumbBoxJson ? thumbBoxJson["pic"] : ""}
      des={null}
      isLarge={null}
      />
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <h1 className={`text-center mt-5 ${styles.capitalize}`}>
              {category}
            </h1>
            <div className="text-secondary fs-15">{data.description}</div>
          </div>
          <h5 className="text-muted font-weight-medium mb-3">Feature</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className={styles.thumbBox}>{data && ThumbLargeHtml(data.category[0])}</div>
        </div>
        <div className="col-lg-5">
          {data && <>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(data.category[1])}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(data.category[2])}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(data.category[3])}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(data.category[4])}</div>          
          </>
          }
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          <h5 className="text-muted font-weight-medium mb-3">Popular News</h5>
        </div>
      </div>
      <div className="row">
        <ul className={styles.thumbBoxTable}>
        {data && <>
          {data.category.map(function(object: IthumbBox, i:number){
            console.log(object)
              return <li className={styles.thumbBoxList}>{ThumbHtml(object)}</li>;
          })}         
        </>}

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
