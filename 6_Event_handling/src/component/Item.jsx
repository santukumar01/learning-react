import React from "react";

const Item = ({ foodValue }) => {
  const handleClick = () => {
    console.log(event);
    console.log(`${foodValue} is clicked`);
  };

  return (
    <>
      <li className="list-group-item ">
        <span>{foodValue}</span>
        <button
          style={{ float: "right" }}
          // onClick={() => console.log("buy Btn clicked")}
          // onClick={() => handleClick(foodValue)}
          // onClick={(event) => handleClick(event)}
          onClick={handleClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
