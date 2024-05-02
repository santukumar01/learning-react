import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./App.module.css";
import AppHeder from "./component/AppHeder";

import Input from "./component/Input";
import ListBtn from "./component/ListBtn";
import { useState } from "react";
function App() {
  let btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "%", "c", "="];

  const [activeBtn, setActiveBtn] = useState("");
  let [ans, setAns] = useState("");
  // const [exp , setExp ] = useState("")

  const calculate = (num1, num2, mathOP) => {
    if (mathOP === "+") {
      console.log(num1 + num2);
      return num1 + num2;
    }
  };

  const handleclick = (value) => {
    if (value === "c") {
      setActiveBtn("");
    } else {
      let newValue = activeBtn + value;
      let sign = null;
      if (value === "+" || value === "-" || value === "*" || value === "%") {
        sign = value;
      }
      setActiveBtn(newValue);
      let a = Number(activeBtn);
      let b = Number(value);

      if (value === "=") {
        console.log(sign, "is clicked");
        ans = calculate(a, b, sign);
        setActiveBtn("");
        setAns(ans);
      }
    }
    console.log(`${value} btn is clicked`);
  };

  return (
    <>
      <AppHeder />
      <div className={styles.calculator}>
        <Input activeBtn={activeBtn} ans={ans} />
        <ListBtn btn={btn} handleclick={handleclick} />
      </div>
    </>
  );
}

export default App;
