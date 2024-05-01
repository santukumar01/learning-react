import React, { useState } from "react";
import Item from "./Item";
const ItemList = ({ foodArr, handleclick }) => {
  const [active, setActive] = useState([]);

  const onBuyBtn = (item) => {
    let newArr = [...active, item];

    console.log(newArr);
    setActive(newArr);
  };

  return (
    <ul className="list-group">
      {foodArr.map((item) => (
        // <Item key={item} item={item} handleclick={handleclick} />
        <Item
          key={item}
          item={item}
          bought={active.includes(item)}
          handleActive={() => onBuyBtn(item)}
        />
      ))}
    </ul>
  );
};

export default ItemList;
