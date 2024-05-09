import React from "react";

import { useSelector } from "react-redux";

const PrivateMsg = () => {
  useSelector((newstore) => newstore.private);

  return <p> This is Proivate !!!!!!!! </p>;
};

export default PrivateMsg;
