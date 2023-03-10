import React from "react";
import useSWR, { Fetcher } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

import { fetcher } from "../../../lib/utils/fetcher";
import SuggestionBottom from "@/components/article/SuggestionBottom";
import ArticleMeta from "@/components/article/ArticleMeta";
import {
  ARTICLE_QUERY_MAP,
  SERVER_BASE_URL,
} from "../../../lib/utils/constant";
import { IArticle } from "@/lib/type/articleType";
import ArticleAPI from "../../../lib/api/article";

const ArticlePage = (initialArticle: IArticle) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const locale = router.locale as string;

  const { data: fetchedArticle, error: error } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/article/${slug}/`,
    fetcher
  );

  const article: IArticle = fetchedArticle || initialArticle;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {article ? <ArticleMeta article={article} /> : <Skeleton />}
          <SuggestionBottom />
        </div>
      </div>
    </div>
  );
};

ArticlePage.getInitialProps = async ({ query: { slug }, locale }: any) => {
  const { data } = await ArticleAPI.get(slug, locale);
  return data;
};

export default ArticlePage;
