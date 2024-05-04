import React, { useContext } from "react";
import styles from "./Item.module.css";
import Item from "./Item";

import { TodoContex } from "../storage/Contex";

const ListItem = () => {
  const todoContext = useContext(TodoContex);
  const todo = todoContext.todo;
  const handleDelete = todoContext.handleDelete;
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
