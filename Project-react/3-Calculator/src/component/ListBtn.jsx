import React from "react";
import styles from "../App.module.css";
import Btn from "./Btn";
const ListBtn = ({ btn, handleclick }) => {
  return (
    <div className="btnCon">
      {btn.map((btnValue) => (
        <Btn btnVlaue={btnValue} handleclick={handleclick} />
      ))}
    </div>
  );
};

export default ListBtn;
