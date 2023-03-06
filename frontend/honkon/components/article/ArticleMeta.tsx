import React from "react";
import Image from "next/image";

import styles from "styles/home/feature/featureblog.module.scss";
import { parse } from "node-html-parser";

const ArticleMeta = ({ article }: any) => {
  const root = parse(article.content);
  var template = { __html: article.content };

  return (
    <>
      <div className="news-post-wrapper">
        <div className="news-post-wrapper-sm ">
          <h1 className="text-center">{article.title}</h1>
          <div className="text-center">
            <a
              href="#"
              className="btn btn-dark font-weight-bold mb-4 text-capitalize"
            >
              {article.category}
            </a>
          </div>
          <p className="fs-15 d-flex justify-content-center align-items-center m-0">
            <Image
              src="/images/cat.jpg"
              alt=""
              className="img-xs img-rounded mr-2"
              width={1200}
              height={630}
            />
            {article.author} | {article.publish_time}
          </p>
          <p className="pt-4 pb-4">{article.caption}</p>
        </div>
        <Image
          src={article.pic}
          alt="news"
          className="img-fluid mb-4"
          width={1200}
          height={630}
          unoptimized
        />
        <div id="newsParagraph" className="pt-10">
          <div dangerouslySetInnerHTML={template} />
        </div>
      </div>
    </>
  );
};

export default ArticleMeta;
