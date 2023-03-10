import Head from "next/head";
import Script from "next/script";
import React from "react";

import Layout from "components/common/Layout";
import ContextProvider from "lib/context";

import { SSRProvider } from "react-bootstrap";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.module.scss";

const App = ({ Component, pageProps }: any) => (
  <>
    <SSRProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>HonKon.Life</title>
        <link rel="shortcut icon" href="../public/images/favicon.png" />
      </Head>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </SSRProvider>
  </>
);

export default App;
