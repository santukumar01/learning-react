import React from "react";

import styles from "./Input.module.css";

const Input = ({
  handleAdd,
  inputTodo,
  inputDate,
  setInputTodo,
  setinputDate,
}) => {
  const handleinputTodo = (event) => {
    setInputTodo(event.target.value);
    // console.log(event.target.value);
  };

  const handleInputDate = (event) => {
    setinputDate(event.target.value);
    // console.log(event.target.value);
  };
  console.log("del is calling");
  return (
    <div className="container text-center">
      <div className={`${styles.inputRow} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo"
            value={inputTodo}
            onChange={handleinputTodo}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleInputDate} value={inputDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success " onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
