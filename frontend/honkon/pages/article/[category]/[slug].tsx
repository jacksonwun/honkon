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

export async function getStaticPaths({ locales }: any) {
  console.log(locales);
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      {
        params: {
          category: "123",
          slug: "123",
        },
        locale: "en",
      },
      {
        params: {
          slug: "123",
          category: "123",
        },
        locale: "zh-hk",
      },
    ],
    fallback: true,
  };
}

ArticlePage.getStaticProps = async ({ query: { slug } }: any) => {
  const { data } = await ArticleAPI.get(slug);
  return data;
};

export default ArticlePage;
