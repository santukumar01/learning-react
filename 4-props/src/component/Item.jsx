import React from "react";

import IndivisualIem from "./IndivisualIem.jsx";

const Item = (props) => {
  let { foodArray } = props;
  //   foodArray.push("foodE"); this will modify the  results by extra results
  console.log(foodArray);
  return (
    <>
      {foodArray !== 0 && (
        <ul className="list-group">
          {foodArray.map((item) => (
            <IndivisualIem key={item} ListItem={item}></IndivisualIem> // sending data as a props
          ))}
        </ul>
      )}
    </>
  );
};

export default Item;
