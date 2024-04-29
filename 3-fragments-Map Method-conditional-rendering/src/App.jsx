// Allows grouping of multiple elements without extra DOM nodes
//Return multiple elements without a wrapping parent.

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <h1>Healthy Food</h1>
//       <ul class="list-group">
//         <li class="list-group-item" aria-current="true">
//           An active item
//         </li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//         <li class="list-group-item">A fourth item</li>
//         <li class="list-group-item">And a fifth one</li>
//       </ul>
//     </React.Fragment>
//   );
// }

// Map Method

// The issue arises because forEach doesn't return a new array of JSX elements like map does; it simply iterates over the array. Therefore, it doesn't generate any JSX output inside the curly braces {}.

// function App() {
//   let food = ["foodA", "foodB", "foodC", "foodD"];
//   return (
//     <React.Fragment>
//       <h1>Healthy Food</h1>
//       <ul className="list-group">
//         {food.map((item) => {
//           return (
//             // Assign unique key for optimized re-renders.
// key is only for vitrual DOM
//             <li key={item} className="list-group-item">
//               {item}
//             </li>
//           );
//         })}
//       </ul>
//     </React.Fragment>
//   );
// }

// conditial redenering ->(if- else , terniary opertor , logical)

function App() {
  // let food = [];
  let food = ["foodA", "foodB", "foodC", "foodD"];

  // if (food.length === 0) {
  //   return <h3>I am Stiil Hungry</h3>;
  // }

  // let expression = food.length === 0 ? <h3>I am still hungry</h3> : null;
  let expression = food.length === 0 && <h3>I am hungry</h3>;
  return (
    <>
      <h1>Healthy Food</h1>
      {/* terniary operator */}
      {/* null or nay other falsy value  is completly igonerd by jsx */}
      {/* {food.length === 0 ? <h3>I am still hungry</h3> : null}
       */}

      {expression}
      <ul class="list-group">
        {food.length !== 0 &&
          food.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;

// for wrapping multiple elment we use a div tag or Fragment
// Fragment doest not add any extra tags to DOM but div
