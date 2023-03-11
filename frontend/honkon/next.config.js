/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  i18n: {
    locales: ["en", "zh-hk"],
    defaultLocale: "en",
    domains: [
      {
        domain: "honkon.life",
        defaultLocale: "en",
        locales: ["en", "zh-hk"],
      },
    ],
  },

  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "_mixins.scss";`,
  },
  images: {
    domains: ["eu-frankfurt.myqcloud.com"],
    loader: "custom",
    loaderFile: "./public/images/loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-frankfurt.myqcloud.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
