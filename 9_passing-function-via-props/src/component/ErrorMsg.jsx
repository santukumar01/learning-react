import React from "react";

const ErrorMsg = ({ foodArr }) => {
  let expression = foodArr.length === 0 && <h3>I am hungry</h3>;
  return <div>{expression}</div>;
};

export default ErrorMsg;
