import React from "react";
import Navigation from "../components/Navigation";
import ReadPreviews from "../components/ReadPreviews";
import Reads from "../components/Reads";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

export default props => (
  <PageWrapper>
    <Navigation {...props} />
    <ReadPreviews {...props} />
    <Reads {...props} />
    <Footer {...props} />
  </PageWrapper>
);
