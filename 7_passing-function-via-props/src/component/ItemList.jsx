import React from "react";

import Item from "./Item";

const ItemList = ({ food }) => {
  return (
    <ul class="list-group">
      {food.map((foodItem) => (
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
