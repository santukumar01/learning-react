import React from "react";
import styles from "./Item.module.css";
import Item from "./Item";
const ListItem = ({ todo, handleDelete }) => {
  console.log("inside ListItem");
  return (
    <div className="container">
      {todo.length === 0 ? (
        <h4>no works todo</h4>
      ) : (
        todo.map((todoItem) => (
          <Item
            key={todoItem.todo}
            todo={todoItem}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default ListItem;
