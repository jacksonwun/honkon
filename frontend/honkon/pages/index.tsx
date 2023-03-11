import Head from "next/head";
import Image from "next/image";
import { BrowserRouter as Router } from "react-router-dom";

import Banner from "@/components/home/Banner";
import Feature from "@/components/home/Feature";
import SectionA from "@/components/home/Section/SectionA";
import SectionB from "@/components/home/Section/SectionB";
import SectionC from "@/components/home/Section/SectionC";

export default function Home() {
  return (
    <>
      <div className="container">
        {/* <Banner /> */}
        <Feature />
        {/* <SectionA /> */}
        {/* <SectionB /> */}
        <SectionC />
      </div>
    </>
  );
}
