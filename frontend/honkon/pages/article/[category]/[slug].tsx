import React from "react";
import useSWR, { Fetcher } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

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
  const locale = router.query.locale as string;

  console.log(locale);

  const { data: fetchedArticle, error: error } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/article/${slug}/`,
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

export const getStaticPaths = ({ locales, context }: any) => {
  console.log(locales, context);
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      {
        params: {
          slug: context.params.slug,
          category: context.params.category,
        },
        locale: "en",
      },
      {
        params: {
          slug: context.params.slug,
          category: context.params.category,
        },
        locale: "zh-hk",
      },
    ],
    fallback: true,
  };
};
