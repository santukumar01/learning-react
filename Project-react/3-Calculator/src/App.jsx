import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./App.module.css";
import AppHeder from "./component/AppHeder";

import Input from "./component/Input";
import ListBtn from "./component/ListBtn";
function App() {
  let btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "%"];
  return (
    <>
      <AppHeder />
      <div className={styles.calculator}>
        <Input />
        <ListBtn btn={btn} />
      </div>
    </>
  );
}

export default App;
