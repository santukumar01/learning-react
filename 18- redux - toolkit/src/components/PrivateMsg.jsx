import React from "react";

import { useSelector } from "react-redux";

const PrivateMsg = () => {
  const privateObj = useSelector((store) => store.private);

  console.log(privateObj);

  return <p> This is Proivate !!!!!!!! </p>;
};

export default PrivateMsg;
