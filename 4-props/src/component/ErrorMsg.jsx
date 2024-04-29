import React from "react";

const ErrorMsg = (arg) => {
  // parameter name can be anything
  let { foodArray } = arg; // destrustring the object

  let expression = foodArray.length === 0 ? <h3>I am Still Hungry</h3> : null;
  return <>{expression}</>;
};

export default ErrorMsg;
