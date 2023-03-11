export const SERVER_BASE_URL = `${process.env.NEXT_PUBLIC_HTTP}://${process.env.NEXT_PUBLIC_API_URL}`;

/**:${process.env.NEXT_PUBLIC_API_PORT};*/

export const SERVER_API_PORT = `${process.env.NEXT_BACKEND_API_PORT}`;

export const APP_NAME = `honkon`;

export const ARTICLE_QUERY_MAP = {
  "tab=allCategory": `${SERVER_BASE_URL}/articles/categories`,
  "tab=byCategory": `${SERVER_BASE_URL}/articles`,
  "tab=article": `${SERVER_BASE_URL}/articles/article`,
  "tab=allAuthor": `${SERVER_BASE_URL}/articles/author/list`,
  "tab=author": `${SERVER_BASE_URL}/articles/author`,
};

export const DEFAULT_PROFILE_IMAGE = `https://static.productionready.io/images/smiley-cyrus.jpg`;

export const DEFAULT_LIMIT = 20;

//** Language i18n */
export const fallbackLng = "en";
export const languages = [fallbackLng, "de"];
