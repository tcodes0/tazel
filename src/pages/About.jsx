import React from "react";
import PageWrapper from "../components/PageWrapper";
import Navigation from "../components/Navigation";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Footer from "../components/Footer";
import EmailMe from "../components/EmailMe";
import ThanksAbout from "../components/ThanksAbout";
import AboutText from "../components/AboutText";

export default props => (
  <PageWrapper {...props}>
    <Navigation {...props} />
    <LanguageSwitcher />
    <AboutText />
    <EmailMe />
    <ThanksAbout />
    <Footer {...props} />
  </PageWrapper>
);
