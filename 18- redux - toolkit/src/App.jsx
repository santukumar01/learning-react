import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Container from "./components/Container";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controller from "./components/Controller";
import PrivateMsg from "./components/PrivateMsg";
function App() {
  const pri = useSelector((newstore) => newstore.private);
  return (
    <Container>
      <div class="px-4 py-5 my-5 text-center">
        <Header></Header>
        <div class="col-lg-6 mx-auto">
          {pri ? <PrivateMsg /> : <DisplayCounter />}
          <Controller />
        </div>
      </div>
    </Container>
  );
}

export default App;
