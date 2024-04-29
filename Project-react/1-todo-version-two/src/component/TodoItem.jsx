import React from "react";

import styles from "./TodoItem.module.css";

const TodoItem = ({ todos }) => {
  console.log(todos);
  return (
    <div className="container text-center">
      <div class="row">
        <div className={`${styles["item-weight"]} col-6`}>{todos.work}</div>
        <div className="col-4">{todos.Date}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
