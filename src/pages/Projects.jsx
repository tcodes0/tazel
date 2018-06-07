import React from "react";
import Navigation from "../components/Navigation";
import ProjectPreviews from "../components/ProjectPreviews";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

export default props => (
  <PageWrapper>
    <Navigation {...props} />
    <ProjectPreviews {...props} />
    <Projects {...props} />
    <Footer {...props} />
  </PageWrapper>
);
