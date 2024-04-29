import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./component/AppHeader";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
function App() {
  let todos = [
    { work: "Buy Milk", Date: "02/05/2024" },
    { work: "Buy veg", Date: "02/05/2024" },
    { work: "Buy veg", Date: "02/05/2024" },
  ];
  return (
    <center>
      <AppHeader />

      <AddTodo />
      <TodoList todos={todos} />
    </center>
  );
}
export default App;
