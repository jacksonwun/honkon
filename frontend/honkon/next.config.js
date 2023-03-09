/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  i18n: {
    locales: ["en", "zh-hk"],
    defaultLocale: "en",
    localeDetection: false,
  },
  domains: [
    {
      domain: "http://localhost:3000/",
      defaultLocale: "en",
    },
    {
      domain: "http://honkon.life/",
      defaultLocale: "en",
    },
    {
      domain: "http://uk.honkon.life/",
      defaultLocale: "en",
    },
    {
      domain: "https://honkon.life/",
      defaultLocale: "en",
    },
    {
      domain: "https://uk.honkon.life/",
      defaultLocale: "en",
    },
  ],
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
      // {
      //   protocol: "https",
      //   hostname: "honkon-frontend.s3.eu-west-2.amazonaws.com",
      //   port: "",
      //   pathname: "**",
      // },
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
