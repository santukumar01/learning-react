import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./App.module.css";
import AppHeder from "./component/AppHeder";

function App() {
  return (
    <>
      <AppHeder />
      <div className={styles.calculator}>
        <input className={styles.input} type="text" />
        <div className="btnCon">
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>
        </div>
      </div>
    </>
  );
}

export default App;
