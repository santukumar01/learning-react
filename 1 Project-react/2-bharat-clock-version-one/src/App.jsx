import AppHeader from "./component/AppHeader";
import Time from "./component/Time.jsx";
import AppSubHeader from "./component/AppsubHeader.jsx";
import "./style.css";

function App() {
  return (
    <center className="bg-primary-subtle">
      <AppHeader></AppHeader>
      <div className="custom-margin">
        <AppSubHeader />
        <Time></Time>
      </div>
    </center>
  );
}

export default App;
