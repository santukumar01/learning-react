import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./component/AppHeader";
import ItemList from "./component/ItemList";
import Container from "./component/Container";
import Input from "./component/Input";

function App() {
  let food = ["FoodA", "FoodB", "FoodC", "FoodC", "FoodD", "foodE"];

  return (
    <>
      <Container>
        <AppHeader />
        <Input />
        <ItemList food={food} />
      </Container>
      <Container>
        <p>Above foods are good for health and well being</p>
      </Container>
    </>
  );
}

export default App;
