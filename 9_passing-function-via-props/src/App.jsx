import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import AppHeader from "./component/AppHeader";
import Container from "./component/Container";
import Input from "./component/Input";
import ItemList from "./component/ItemList";
import ErrorMsg from "./component/ErrorMsg";
function App() {
  // both data and function are sending from parent  tro child
  // let foodArr = ["Dal", "Chawal", "ghee"];
  let [foodArr, SetFoodArr] = useState(["Dal", "Chawal", "ghee"]);
  let [text, setText] = useState("");

  let handleOnChange = (event) => {
    if (event.key === "Enter") {
      // console.log(event);
      // let newFood = event.target.value;
      setText(event.target.value);
      event.target.value = "";
      console.log("ytou entered", text);
      // console.log(text);
      // console.log(text);
      let newArray = [...foodArr, text];

      // console.log(newArray);
      SetFoodArr(newArray);
    }
  };

  // const handleClick = () => {
  //   // console.log(text);
  //   let newArray = [...foodArr, text];

  //   // console.log(newArray);
  //   SetFoodArr(newArray);
  // };

  return (
    <Container>
      <AppHeader />
      <Input handleOnChange={handleOnChange} />
      {/* {text} */}
      <ErrorMsg foodArr={foodArr} />
      <ItemList foodArr={foodArr} />
    </Container>
  );
}

export default App;
