import React from "react";

import Item from "./Item";

const ItemList = ({ food }) => {
  return (
    <ul class="list-group">
      {food.map((foodItem) => (
        <Item foodValue={foodItem} />
      ))}
    </ul>
  );
};

export default ItemList;
