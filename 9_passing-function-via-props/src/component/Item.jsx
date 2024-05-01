import React from "react";
import style from "./Item.module.css";

const Item = ({ item, handleclick, bought, handleActive }) => {
  console.log(bought);
  return (
    <div>
      <li id={item} className={`list-group-item ${bought && "active"}`}>
        {item}
        {/* <button className={`${style.btn}`} onClick={() => handleclick(item)}> */}
        <button className={`${style.btn}`} onClick={handleActive}>
          Buy
        </button>
      </li>
    </div>
  );
};

export default Item;
