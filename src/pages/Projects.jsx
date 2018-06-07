import React from "react";
import Header from "../components/Header";
import ProjectPreviews from "../components/ProjectPreviews";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

export default props => (
  <PageWrapper>
    <Header {...props} />
    <ProjectPreviews {...props} />
    <Projects {...props} />
    <Footer {...props} />
  </PageWrapper>
);
