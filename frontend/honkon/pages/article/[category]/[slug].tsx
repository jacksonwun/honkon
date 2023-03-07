import React from "react";
import useSWR, { Fetcher } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

import { fetcher } from "../../../lib/utils/fetcher";
import SuggestionBottom from "@/components/article/SuggestionBottom";
import ArticleMeta from "@/components/article/ArticleMeta";
import { ARTICLE_QUERY_MAP } from "../../../lib/utils/constant";
import { IArticle } from "@/lib/type/articleType";
import ArticleAPI from "../../../lib/api/article";

const ArticlePage = (initialArticle: any) => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { data: fetchedArticle, error: error } = useSWR(
    `${ARTICLE_QUERY_MAP["tab=article"]}}/${slug}/`,
    fetcher
  );

  const article: IArticle = fetchedArticle || initialArticle;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ArticleMeta article={article} />
          <SuggestionBottom />
        </div>
      </div>
    </div>
  );
};

ArticlePage.getInitialProps = async ({ query: { slug } }: any) => {
  const { data } = await ArticleAPI.get(slug);
  return data;
};

export default ArticlePage;
