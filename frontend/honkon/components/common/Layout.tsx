import React, { HtmlHTMLAttributes } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
}: React.PropsWithChildren<{ example?: string }>) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
