import React from "react";

const Input = ({ handleOnChange, handleAdd }) => {
  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Input;
