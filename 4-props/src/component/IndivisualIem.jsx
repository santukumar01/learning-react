import React from "react";

import styes from "./IndivisualIem.module.css";

const IndivisualIem = (props) => {
  return (
    <>
      {/* <li className="list-group-item  styes['sa-font']">{props.ListItem}</li> */}
      <li className={`${styes["sa-font"]}  list-group-item `}>
        {props.ListItem}
      </li>
      {/* <li className={`${styes["sa-font"]}`}>{props.ListItem}</li> */}
      {/* <li className={styes["sa-font"]}>{props.ListItem}</li> */}
    </>
  );
};

export default IndivisualIem;
