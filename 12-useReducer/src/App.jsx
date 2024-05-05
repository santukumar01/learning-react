import React, { useReducer, useState } from "react";
import Container from "./component/Container";
import Appheader from "./component/Appheader";
import Input from "./component/Input";
import ListItem from "./component/ListItem";
import TodoContexProvider, { TodoContex } from "./storage/Contex";

function App() {
  return (
    <TodoContexProvider>
      <Container>
        <Appheader />
        <Input />
        <ListItem />
      </Container>
    </TodoContexProvider>
  );
}

export default App;
