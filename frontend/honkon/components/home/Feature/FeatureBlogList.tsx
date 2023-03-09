import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import FeatureBlog from "./FeatureBlog";
import ArticleAPI from "../../../lib/api/article";
import { SERVER_BASE_URL } from "../../../lib/utils/constant";
import { fetcher } from "../../../lib/utils/fetcher";

const FeatureBlogList = (initialList: any) => {
  const router = useRouter();
  const locale = router.locale as string;

  const { data: fetchedList, error: error } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/feature/`,
    fetcher
  );
  const data: any = fetchedList || initialList;

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          {data.results && (
            <FeatureBlog
              title={data.results[0].title}
              slug={data.results[0].slug}
              category_slug={data.results[0].category_slug}
              category={data.results[0].category}
            />
          )}
        </div>
        <div className="col-sm-6">
          {data.results && (
            <FeatureBlog
              title={data.results[1].title}
              slug={data.results[1].slug}
              category_slug={data.results[1].category_slug}
              category={data.results[1].category}
            />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {data.results && (
            <FeatureBlog
              title={data.results[2].title}
              slug={data.results[2].slug}
              category_slug={data.results[2].category_slug}
              category={data.results[2].category}
            />
          )}
        </div>
        <div className="col-sm-6">
          {data.results && (
            <FeatureBlog
              title={data.results[3].title}
              slug={data.results[3].slug}
              category_slug={data.results[3].category_slug}
              category={data.results[3].category}
            />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {data.results && (
            <FeatureBlog
              title={data.results[4].title}
              slug={data.results[4].slug}
              category_slug={data.results[4].category_slug}
              category={data.results[4].category}
            />
          )}
        </div>
        <div className="col-sm-6">
          {data.results && (
            <FeatureBlog
              title={data.results[5].title}
              slug={data.results[5].slug}
              category_slug={data.results[5].category_slug}
              category={data.results[5].category}
            />
          )}
        </div>
      </div>
    </>
  );
};

FeatureBlogList.getInitialProps = async ({ locale }: any) => {
  const { data } = await ArticleAPI.getFeature(locale);
  console.log(locale);
  return data;
};

export default FeatureBlogList;
