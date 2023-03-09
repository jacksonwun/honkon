import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";

import styles from "styles/Home.module.scss";
import ThumbBox from "@/components/common/ThumbBox";
import NewsBox from "./newsBox";
import { SERVER_BASE_URL } from "../../../../lib/utils/constant";
import { fetcher } from "../../../../lib/utils/fetcher";
import ArticleAPI from "../../../../lib/api/article";

const SectionCRight = (initialList: any) => {
  const router = useRouter();
  const locale = router.locale as string;

  const { data: fetchedList, error: error } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/latest/`,
    fetcher
  );
  const data: any = fetchedList || initialList;

  return (
    <>
      <div className="col-lg-3">
        <div className="position-relative mb-3">
          <Image
            src="/images/cat.jpg"
            className={styles.imgFluid}
            alt="world-news"
            width={1200}
            height={630}
          />
          <div className="video-thumb text-muted">
            <span>
              <i className="mdi mdi-menu-right"></i>
            </span>
            LIVE
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex position-relative float-left">
              <h3 className="section-title">Latest News</h3>
            </div>
          </div>
          {data.results &&
            data.results.map(function (object: any, i: number) {
              return (
                <NewsBox
                  cat={object.category}
                  catSlug={object.category_slug}
                  title={object.title}
                  slug=""
                  timestamp="2 hours ago"
                  index={i}
                  key={i}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

SectionCRight.getInitialProps = async ({ locale }: any) => {
  const { data } = await ArticleAPI.getLatest(locale);
  return data;
};

export default SectionCRight;
