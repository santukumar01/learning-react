import React, { useState } from "react";

import Container from "./component/Container";
import Appheader from "./component/Appheader";
import Input from "./component/Input";
import ListItem from "./component/ListItem";

// react works async

function App() {
  const [todo, setTodo] = useState([]);

  const handleAdd = (inputTodo, inputDate) => {
    let newObj = {
      todo: inputTodo,
      date: inputDate,
    };
    // in spread op all elemet of prevois aar copy to new element and then  new elemt added
    // if spread is not there then  full arr ewent inside the new arr like only one elemet
    // let newTodoArr = [...todo, newObj];
    // setTodo(newTodoArr);

    //updating from previous state function update

    setTodo((curtodo) => {
      // console.log(curtodo);
      const newTodoItems = [...curtodo, newObj];
      return newTodoItems;
    });
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
