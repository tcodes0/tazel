import React from "react";
import Header from "../components/Header";
import ProjectPreviews from "../components/ProjectPreviews";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import onLoaders from "../components/utils";

class ProjectsPage extends React.Component {
  componentDidMount() {
    document.title = "Thomazella's projects";
    onLoaders.forEach(onLoader => {
      onLoader();
    });
  }

  render() {
    return (
      <PageWrapper>
        <Header {...this.props} />
        <ProjectPreviews {...this.props} />
        <Projects {...this.props} />
        <Footer {...this.props} />
      </PageWrapper>
    );
  }
}

export default ProjectsPage;
