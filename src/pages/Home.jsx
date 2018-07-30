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
        <HeaderFancy />
        <ProfessionalDescription />
        <Footer className="footer-home" />
      </PageWrapper>
    );
  }
}

export default Home;
