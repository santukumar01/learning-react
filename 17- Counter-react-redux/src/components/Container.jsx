import React from "react";

const Container = ({ children }) => {
  return (
    <div class="card" style={{ width: "100%" }}>
      <div class="card-body">{children}</div>
    </div>
  );
};

export default Container;
