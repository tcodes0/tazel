import React from "react";

const ProjPreviewWrapper = ({ children, ...props }) => (
  <div {...props}>
    {children}
    <hr className="horizontal-separator" />
    <hr className="vertical-separator" />
  </div>
);

export default ProjPreviewWrapper;
