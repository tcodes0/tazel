import React from "react";
import Guide from "../components/Guide";
import MainContainer from "../components/MainContainer";

const PageWrapper = ({ children, ...props }) => (
  <div>
    <Guide {...props} />
    <MainContainer {...props}>{children}</MainContainer>
  </div>
);

export default PageWrapper;
