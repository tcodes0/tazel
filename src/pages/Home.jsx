import React from "react";
import HeaderFancy from "../components/HeaderFancy";
import ProfessionalDescription from "../components/ProfessionalDescription";
import FooterHome from "../components/FooterHome";
import PageWrapper from "../components/PageWrapper";

export default props => (
  <PageWrapper>
    <HeaderFancy {...props} />
    <ProfessionalDescription {...props} />
    <FooterHome {...props} />
  </PageWrapper>
);
