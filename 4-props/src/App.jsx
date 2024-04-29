import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./component/AppHeader.jsx";
import ErrorMsg from "./component/ErrorMsg.jsx";
import Item from "./component/Item.jsx";
// props should be  immutable
// used to commnunicate betwwen two componetes -> one- wny , downstram (p arent -> child)
function App() {
  // let food = [];
  let food = ["foodA", "foodB", "foodC", "foodD"];

  return (
    <>
      <AppHeader />
      <ErrorMsg foodArray={food} />
      <Item foodArray={food} />
    </>
  );
}

export default App;
