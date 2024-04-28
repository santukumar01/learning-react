// function App() {
//   return (
//     <center>
//       <h1>Todo APP</h1>
//       <div class="container text-center">
//         <div class="row">
//           <div class="col-6">
//             <input type="text" placeholder="Enter your Todo Here" />
//           </div>
//           <div class="col-4">
//             <input type="date" name="" id="" />
//           </div>
//           <div class="col-2">
//             <button type="button" class="btn btn-success">
//               Add
//             </button>
//           </div>
//         </div>
// <br />
// <div class="row">
//   <div class="col-6">Buy Milk</div>
//   <div class="col-4">4/10/2000</div>
//   <div class="col-2">
//     <button type="button" class="btn btn-danger">
//       Delete
//     </button>
//   </div>
//         </div>
//         <br />
//         <div class="row">
//           <div class="col-6">Buy someOther</div>
//           <div class="col-4">4/10/2000</div>
//           <div class="col-2">
//             <button type="button" class="btn btn-danger">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </center>
//   );
// }

// export default App;
import AppHeader from "./component/AppHeader.jsx";
import AddTodo from "./component/AddTodo.jsx";
import Todos from "./component/Todo.jsx";

import "./style.css";

function App() {
  return (
    <center>
      <AppHeader />
      <AddTodo />
      <div className="margin-custom">
        <Todos />
        <Todos />
      </div>
    </center>
  );
}

export default App;
