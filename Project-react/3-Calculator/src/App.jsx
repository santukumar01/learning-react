import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./App.module.css";
import AppHeder from "./component/AppHeder";

import Input from "./component/Input";
import ListBtn from "./component/ListBtn";
import { useState } from "react";
function App() {
  let btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "%", "c", "="];

  const [activeBtn, setActiveBtn] = useState("");
  // let [ans, setAns] = useState("");
  // const [exp , setExp ] = useState("")

  const calculate = (num1, num2, mathOP) => {
    // console.log(num1, num2);
    if (mathOP === "+") {
      console.log(num1 + num2);
      return num1 + num2;
    }
  };

  const handleclick = (value) => {
    if (value === "c") {
      setActiveBtn("");
    } else if (value === "=") {
      const results = eval(activeBtn);
      setActiveBtn(results);
    } else {
      let newValue = activeBtn + value;
      setActiveBtn(newValue);
    }
  };

  return (
    <>
      <AppHeder />
      <div className={styles.calculator}>
        <Input activeBtn={activeBtn} />
        <ListBtn btn={btn} handleclick={handleclick} />
      </div>
    </>
  );
}

export default App;
