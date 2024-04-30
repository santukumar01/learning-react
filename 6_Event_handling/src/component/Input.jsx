import React from "react";

const Input = () => {
  const handleOnChange = (event) => {
    // console.log(event);
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleOnChange} />;
};

export default Input;
