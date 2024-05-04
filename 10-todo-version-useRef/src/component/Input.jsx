import React, { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

import styles from "./Input.module.css";
// useing ref
const Input = ({ handleAdd }) => {
  // const [inputTodo, setInputTodo] = useState("");
  // const [inputDate, setinputDate] = useState("");

  const inputTodoName = useRef("");
  const inputTodoDate = useRef("");

  const handleAddbtnClicked = (event) => {
    event.preventDefault();
    console.log(
      `${inputTodoName.current.value} with time ${inputTodoDate.current.value}`
    );

    const todoName = inputTodoName.current.value;
    const todoDate = inputTodoDate.current.value;
    // console.log("todonae", todoName)  ;  // this gives element

    handleAdd(todoName, todoDate);
    inputTodoName.current.value = "";
    inputTodoDate.current.value = "";
  };

  //  Using forms
  return (
    <div className="container text-center">
      {/* action attribute tells us that where it is going to  be submit */}
      <form
        className={`${styles.inputRow} row`}
        onSubmit={(event) =>
          handleAddbtnClicked(event, inputTodoName, inputTodoDate)
        }
      >
        <div className="col-6">
          <input type="text" placeholder="Enter todo" ref={inputTodoName} />
        </div>
        <div className="col-4">
          <input type="date" ref={inputTodoDate} />
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
