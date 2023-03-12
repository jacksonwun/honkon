/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  i18n: {
    locales: ["en", "zh-hk"],
    defaultLocale: "en",
    localeDetection: false,
  },

  async redirects() {
    return [
      {
        // source: "/:locale",
        source: "/",
        destination: "/en",
        permanent: false,
        locale: false,
      },
    ];
  },

  trailingSlash: true,
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join("styles")],
    prependData: `@import "_mixins.scss";`,
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["honkon-frontend.s3.eu-west-2.amazonaws.com"],
    loader: "custom",
    loaderFile: "./public/images/loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "honkon-frontend.s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
