import React from "react";
import HeaderFancy from "../components/HeaderFancy";
import ProfessionalDescription from "../components/ProfessionalDescription";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { $, $$ } from "../utils/index";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Thomazella's homepage";
  }

  render() {
    return (
      <PageWrapper {...this.props}>
        <HeaderFancy {...this.props} />
        <ProfessionalDescription {...this.props} />
        <Footer className="footer-home" {...this.props} />
      </PageWrapper>
    );
  }
}

export default Home;