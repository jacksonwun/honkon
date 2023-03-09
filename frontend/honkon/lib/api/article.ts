import axios from "axios";

import { getQuery } from "../utils/getQuery";

import { IArticle } from "../type/articleType";
import { ARTICLE_QUERY_MAP, SERVER_BASE_URL } from "../utils/constant";

const ArticleAPI = {
  byCategory: (category: string, locale: string) =>
    axios.get(`${SERVER_BASE_URL}/${locale}/articles/${category}/`),

  get: (slug: string, locale: string) =>
    axios.get(`${SERVER_BASE_URL}/${locale}/articles/article/${slug}/`),

  getLatest: (locale: string) =>
    axios.get(`${SERVER_BASE_URL}/${locale}/articles/latest/`),

  getEditor: (locale: string) =>
    axios.get(`${SERVER_BASE_URL}/${locale}/articles/editors/`),

  getFeature: (locale: string) =>
    axios.get(`${SERVER_BASE_URL}/${locale}/articles/feature/`),

  getFeatureSlide: (locale: string) =>
    axios.get(`${SERVER_BASE_URL}/${locale}/articles/featureslide/`),
  ///
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
