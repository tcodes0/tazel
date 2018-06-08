import React from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Footer from "../components/Footer";
import EmailMe from "../components/EmailMe";
import ThanksAbout from "../components/ThanksAbout";
import AboutText from "../components/AboutText";
import onLoaders from "../components/utils";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Thomazella";
    onLoaders.forEach(onLoader => {
      onLoader();
    });
  }

  render() {
    return (
      <PageWrapper {...this.props}>
        <Header {...this.props} />
        <LanguageSwitcher />
        <AboutText />
        <EmailMe />
        <ThanksAbout />
        <Footer {...this.props} />
      </PageWrapper>
    );
  }
}

export default About;
