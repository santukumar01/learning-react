import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./component/AppHeader";
import ItemList from "./component/ItemList";
import Container from "./component/Container";
import Input from "./component/Input";

function App() {
  // both data and function are sending from parent  tro child
  let food = ["FoodA", "FoodB", "FoodC", "FoodC", "FoodD", "foodE"];
  const handleOnChange = (event) => {
    // console.log(event);
    console.log(event.target.value);
  };

  return (
    <>
      {/* we can also give some cutom style in Container like <Container className={styles.container}> */}
      <Container>
        <AppHeader />
        <Input handleOnChange={handleOnChange} />
        <ItemList food={food} />
      </Container>
      <Container>
        <p>Above foods are good for health and well being</p>
      </Container>
    </>
  );
}

export default App;
