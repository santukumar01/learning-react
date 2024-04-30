import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./component/AppHeader";
import ItemList from "./component/ItemList";
import Container from "./component/Container";
import Input from "./component/Input";
import { useState } from "react";

// State represents data that keeps changing
// useSate return array of 2 element
// [cur_vale , method ]
// only that part of DOM is change that useews this state cur_val
function App() {
  // both data and function are sending from parent  tro child

  let [foodArr, setFoodArr] = useState([
    "FoodA",
    "FoodB",
    "FoodC",
    "FoodC",
    "FoodD",
    "foodE",
  ]);

  const [text, setText] = useState("This is By User");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);

    // textToDisplay = event.target.value;
  };

  const handleAdd = (event) => {
    foodArr.push(text);
    console.log(foodArr);
    // setFoodArr((prevFoodArr) => [...prevFoodArr, text]);
    setFoodArr(foodArr);
  };

  return (
    <>
      {/* we can also give some cutom style in Container like <Container className={styles.container}> */}
      <Container>
        <AppHeader />
        <Input handleOnChange={handleOnChange} handleAdd={handleAdd} />
        <div>{text}</div>
        <ItemList foodArr={foodArr} />
      </Container>
    </>
  );
}

export default App;
