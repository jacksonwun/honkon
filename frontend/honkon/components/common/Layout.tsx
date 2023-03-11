import React, { HtmlHTMLAttributes } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
}: React.PropsWithChildren<{ example?: string }>) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
