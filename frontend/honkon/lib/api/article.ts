import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";
import { getQuery } from "../utils/getQuery";

import { IArticle } from "../type/articleType";
import { ARTICLE_QUERY_MAP } from "../utils/constant";

const ArticleAPI = {
  byCategory: (category: string, page: number, limit = 10) =>
    axios.get(`${ARTICLE_QUERY_MAP["tab=byCategory"]}/${category}/`),

  get: (slug: string) =>
    axios.get(`${ARTICLE_QUERY_MAP["tab=article"]}/${slug}/`),

  byAuthor: (author: string, page = 0, limit = 5) =>
    axios.get(
      `${SERVER_BASE_URL}/articles?author=${encodeURIComponent(
        author
      )}&${getQuery(limit, page)}`
    ),

  byTag: (tag: string, page = 0, limit = 10) =>
    axios.get(
      `${SERVER_BASE_URL}/articles?tag=${encodeURIComponent(tag)}&${getQuery(
        limit,
        page
      )}`
    ),
};

export default ArticleAPI;
