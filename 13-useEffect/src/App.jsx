import { useEffect, useState } from "react";
import Component from "./Component";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("inside use Effect");
  }, []);

  console.log("outside Useffect");
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {count % 2 === 0 && <Component />}
    </>
  );
}

export default App;
