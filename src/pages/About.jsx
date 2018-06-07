import React from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Footer from "../components/Footer";
import EmailMe from "../components/EmailMe";
import ThanksAbout from "../components/ThanksAbout";
import AboutText from "../components/AboutText";

export default props => (
  <PageWrapper {...props}>
    <Header {...props} />
    <LanguageSwitcher />
    <AboutText />
    <EmailMe />
    <ThanksAbout />
    <Footer {...props} />
  </PageWrapper>
);
