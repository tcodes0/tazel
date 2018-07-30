import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import Portfolio from "./Portfolio";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/articles" component={Articles} />
    </Switch>
  </BrowserRouter>
);
