import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const conuter = useSelector((newstore) => newstore.counter);

  return <p>This is Counter: {conuter} </p>;
};

export default DisplayCounter;
