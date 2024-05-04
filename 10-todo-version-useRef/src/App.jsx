import React, { useState } from "react";

import Container from "./component/Container";
import Appheader from "./component/Appheader";
import Input from "./component/Input";
import ListItem from "./component/ListItem";

function App() {
  // const todo = [
  //   { todo: "Buy Milk", date: "dd/mm/yy" },
  //   { todo: "Walking", date: "dd/mm/yy" },
  // ];

  const [todo, setTodo] = useState([]);

  const [inputTodo, setInputTodo] = useState("");
  const [inputDate, setinputDate] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    let newObj = {
      todo: inputTodo,
      date: inputDate,
    };
    let newTodoArr = [...todo, newObj];
    setTodo(newTodoArr);
    setInputTodo("");
    setinputDate("");
    console.log(todo);
  };
  console.log("de");
  const handleDelete = (curtodo) => {
    console.log("delte btn is cliked");
    console.log(curtodo);
    // Note - In your handleDelete function, you are mutating the todo array by using splice, and then setting the state with setTodo. However, React may not recognize that the todo array has changed because you're modifying the existing array in place, rather than creating a new array.
    // let index = todo.indexOf(curtodo);
    // todo.splice(index, 1);
    const updatedTodo = todo.filter((item) => item !== curtodo);
    setTodo(updatedTodo);
    // console.log(updatedTodo);
  };

  return (
    <Container>
      <Appheader />
      <Input
        handleAdd={handleAdd}
        inputTodo={inputTodo}
        inputDate={inputDate}
        setInputTodo={setInputTodo}
        setinputDate={setinputDate}
      />
      <ListItem todo={todo} setTodo={setTodo} handleDelete={handleDelete} />
    </Container>
  );
}

export default App;
