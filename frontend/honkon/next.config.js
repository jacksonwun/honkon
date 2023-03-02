/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "_mixins.scss";`,
  },
  images: {
    loader: "custom",
    loaderFile: "./public/images/loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "honkon-frontend.s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
