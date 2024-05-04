import React, { useState } from "react";

import Container from "./component/Container";
import Appheader from "./component/Appheader";
import Input from "./component/Input";
import ListItem from "./component/ListItem";

function App() {
  const [todo, setTodo] = useState([]);

  const handleAdd = (inputTodo, inputDate) => {
    let newObj = {
      todo: inputTodo,
      date: inputDate,
    };
    let newTodoArr = [...todo, newObj];
    setTodo(newTodoArr);

    console.log(todo);
  };

  const handleDelete = (curtodo) => {
    console.log("delte btn is cliked");
    console.log(curtodo);

    const updatedTodo = todo.filter((item) => item !== curtodo);
    setTodo(updatedTodo);
  };

  return (
    <Container>
      <Appheader />
      <Input handleAdd={handleAdd} />
      <ListItem todo={todo} setTodo={setTodo} handleDelete={handleDelete} />
    </Container>
  );
}

export default App;
