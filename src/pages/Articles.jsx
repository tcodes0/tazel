import React from "react";
import Header from "../components/Header";
import ReadPreviews from "../components/ReadPreviews";
import Reads from "../components/Reads";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { hideSelector } from "../utils/index";

class Articles extends React.Component {
  componentDidMount() {
    document.title = "Thomazella's articles";
    hideSelector(".read");
  }

  render() {
    return (
      <PageWrapper {...this.props}>
        <Header />
        <ReadPreviews />
        <Reads />
        <Footer />
      </PageWrapper>
    );
  }
}

export default Articles;
