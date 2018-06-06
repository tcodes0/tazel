import React from "react";
import Guide from "../components/Guide";
import MainContainer from "../components/MainContainer";

const PageWrapper = ({ children, ...props }) => (
  <div {...props}>
    <Guide />
    <MainContainer>{children}</MainContainer>
  </div>
);

export default PageWrapper;
