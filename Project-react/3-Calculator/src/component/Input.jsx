import React, { useState } from "react";
import styles from "../App.module.css";
const Input = ({ activeBtn }) => {
  return (
    <div>
      <input className={styles.input} type="text" value={activeBtn} />
    </div>
  );
};

export default Input;
