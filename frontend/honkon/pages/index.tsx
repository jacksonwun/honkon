import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BrowserRouter as Router } from "react-router-dom";

import Banner from "@/components/home/Banner";
import Feature from "@/components/home/Feature";
import SectionA from "@/components/home/Section/SectionA";
import SectionB from "@/components/home/Section/SectionB";
import SectionC from "@/components/home/Section/SectionC";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <>{console.log("out container")}</>
      <div className="container">
        <>{console.log("in container")}</>
        {/* <Banner /> */}
        <Feature />
        {/* <SectionA /> */}
        {/* <SectionB /> */}
        <SectionC />
      </div>
    </>
  );
}
