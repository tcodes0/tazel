import React from "react";

const MainContainer = ({ children, ...props }) => (
  <div
    {...props}
    id="main"
    className="main flex-vertical-align-center"
    role="main"
  >
    {children}
  </div>
);

export default MainContainer;
