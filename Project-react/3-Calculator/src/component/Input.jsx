import React, { useState } from "react";
import styles from "../App.module.css";
const Input = ({ activeBtn, ans }) => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={ans ? ans : activeBtn}
      />
    </div>
  );
};

export default Input;
