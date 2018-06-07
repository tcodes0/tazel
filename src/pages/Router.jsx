import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import Projects from "./Projects";

export default props => (
  <BrowserRouter {...props}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/articles" component={Articles} />
    </Switch>
  </BrowserRouter>
);
