import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Item.module.css";
const Item = ({ todo, handleDelete }) => {
  return (
    <div className={`row `}>
      <div className={`col-6 ${styles.item}`}>{todo["todo"]}</div>
      <div className="col-4">{todo["date"]}</div>
      <div className="col-2">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(todo)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default Item;
