import React from "react";

import styles from "../App.module.css";

const Btn = ({ btnVlaue, handleclick }) => {
  return (
    <button className={styles.btn} onClick={() => handleclick(btnVlaue)}>
      {btnVlaue}
    </button>
  );
};

export default Btn;
