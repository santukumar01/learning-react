import React from "react";
import { IoMdAdd } from "react-icons/io";

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
  //  Using forms
  return (
    <div className="container text-center">
      {/* action attribute tells us that where it is going to  be submit */}
      <form className={`${styles.inputRow} row`} onSubmit={handleAdd}>
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
          {/* if not given any type then it is of type submit */}
          <button className="btn btn-success " type="submit">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
