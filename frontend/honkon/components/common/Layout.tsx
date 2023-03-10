import React, { HtmlHTMLAttributes } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
}: React.PropsWithChildren<{ example?: string }>) => (
  <>
    <Navbar />
    <>{console.log("children", children)}</>
    {children}
    <Footer />
  </>
);

export default Layout;
