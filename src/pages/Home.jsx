import React from "react";
import HeaderFancy from "../components/HeaderFancy";
import ProfessionalDescription from "../components/ProfessionalDescription";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

export default props => (
  <PageWrapper>
    <HeaderFancy {...props} />
    <ProfessionalDescription {...props} />
    <Footer className="footer-home" {...props} />
  </PageWrapper>
);
