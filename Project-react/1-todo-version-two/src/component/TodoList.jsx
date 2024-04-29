import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  return (
    <div className={styles.textLeft}>
      {todos.map((todoItem) => (
        <TodoItem todos={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
