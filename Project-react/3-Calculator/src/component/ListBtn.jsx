import React from "react";
import styles from "../App.module.css";
import Btn from "./Btn";
const ListBtn = ({ btn }) => {
  let index = 0;
  return (
    <div className="btnCon">
      {btn.map((btnValue) => (
        <Btn btnVlaue={btn[index++]} />
      ))}
    </div>
  );
};

export default ListBtn;
