import React from "react";

import PageContext from "./PageContext";
import PageCountContext from "./PageCountContext";

const ContextProvider = ({
  children,
}: React.PropsWithChildren<{ example?: string }>) => (
  <PageContext>
    <>
      {console.log("outside ContextProvider")}
      <PageCountContext>{children}</PageCountContext>
    </>
  </PageContext>
);

export default ContextProvider;
