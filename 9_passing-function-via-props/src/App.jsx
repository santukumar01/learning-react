import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import AppHeader from "./component/AppHeader";
import Container from "./component/Container";
import Input from "./component/Input";
import ItemList from "./component/ItemList";
import ErrorMsg from "./component/ErrorMsg";
function App() {
  // state should be defined in a way that it can minimize the componetx that is  changing while changing the cur_state
  // both data and function are sending from parent  tro child
  // let foodArr = ["Dal", "Chawal", "ghee"];
  let [foodArr, SetFoodArr] = useState(["Dal", "Chawal", "ghee"]);
  let [text, setText] = useState("");

  let handleOnChange = (event) => {
    if (event.key === "Enter") {
      // console.log(event);
      let newFood = event.target.value;
      setText(event.target.value);
      event.target.value = "";
      console.log("you entered", newFood);
      // console.log("you entered", text);
      // console.log(text);
      let newArray = [...foodArr, newFood];

      // console.log(newArray);
      SetFoodArr(newArray);
    }
    setText(event.target.value);
  };

  // const handleClick = () => {
  //   // console.log(text);
  //   let newArray = [...foodArr, text];

  //   // console.log(newArray);
  //   SetFoodArr(newArray);
  // };

  // simple way to achieve this function usgin javscript
  // const handleclick = (btn) => {
  //   foodArr.map(
  //     (item) => (document.getElementById(item).style.backgroundColor = "")
  //   );
  //   console.log(`${btn} clicked`);
  //   let ele = document.getElementById(btn);
  //   ele.style.backgroundColor = "blue";
  // };

  return (
    <Container>
      <AppHeader />
      <Input handleOnChange={handleOnChange} />
      {/* {text} */}
      <ErrorMsg foodArr={foodArr} />
      {/* <ItemList foodArr={foodArr} handleclick={handleclick} /> */}
      <ItemList foodArr={foodArr} />
    </Container>
  );
}

export default App;
