import React from "react";
import styles from "../App.module.css";

const ListBtn = ({ btn }) => {
  let index = 0;
  return (
    <div className="btnCon">
      {btn.map((btnItem) => (
        <button className={styles.btn}>{btn[index++]}</button>
      ))}
    </div>
  );
};

export default ListBtn;
