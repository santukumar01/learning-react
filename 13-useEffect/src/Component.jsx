import React, { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    console.log("inside Component Useeffcet");
  }, []);
  console.log("OutSide Component UseEffect");

  return <div>This is Component</div>;
};

export default Component;
