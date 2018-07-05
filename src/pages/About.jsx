import React from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailMe from "../components/EmailMe";
import ThanksAbout from "../components/ThanksAbout";
import AboutText from "../components/AboutText";
// import onLoaders from "../utils/index";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Thomazella";
    // onLoaders.forEach(onLoader => {
    //   onLoader();
    // });
  }

  render() {
    return (
      <PageWrapper {...this.props}>
        <Header {...this.props} />
        <AboutText />
        <EmailMe />
        <ThanksAbout />
        <Footer {...this.props} />
      </PageWrapper>
    );
  }
}

export default About;
