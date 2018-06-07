import React from "react";
import Header from "../components/Header";
import ReadPreviews from "../components/ReadPreviews";
import Reads from "../components/Reads";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

export default props => (
  <PageWrapper>
    <Header {...props} />
    <ReadPreviews {...props} />
    <Reads {...props} />
    <Footer {...props} />
  </PageWrapper>
);
