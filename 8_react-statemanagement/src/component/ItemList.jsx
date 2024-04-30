import React from "react";

import Item from "./Item";

const ItemList = ({ foodArr }) => {
  return (
    <ul class="list-group">
      {foodArr.map((foodItem) => (
        <Item
          foodValue={foodItem}
          handleClick={() => {
            console.log(`${foodItem} is clicked`);
          }}
        />
      ))}
    </ul>
  );
};

export default ItemList;
