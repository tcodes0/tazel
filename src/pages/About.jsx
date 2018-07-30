import React from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailMe from "../components/EmailMe";
import ThanksAbout from "../components/ThanksAbout";
import AboutText from "../components/AboutText";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Thomazella";
  }

  render() {
    return (
      <PageWrapper {...this.props}>
        <Header />
        <AboutText />
        <EmailMe />
        <ThanksAbout />
        <Footer />
      </PageWrapper>
    );
  }
}

export default About;
