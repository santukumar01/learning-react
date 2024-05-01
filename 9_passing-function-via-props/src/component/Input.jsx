import React from "react";

// onKeyDown works before the input vlaue changes
// onChange works after input value change
const Input = ({ handleOnChange }) => {
  return (
    <div>
      <input type="text" onKeyDown={handleOnChange} />
      <button style={{ float: "right" }}>Add</button>
    </div>
  );
};

export default Input;
