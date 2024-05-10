import React, { useRef } from "react";
import { useDispatch } from "react-redux";
// import { couterAction, privateAction } from "../store";
import { couterAction } from "../store/counter";
import { privateAction } from "../store/privacy";
const Controller = () => {
  const inputref = useRef();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(couterAction.increment());
  };
  const handleSub = () => {
    dispatch(couterAction.decrement());
  };

  const handleInputAdd = (event) => {
    if (event.key === "Enter") {
      dispatch(couterAction.add({ value: inputref.current.value }));
    }
  };

  const handlePrivate = () => {
    dispatch(privateAction.privacy());

    // dispatch({
    //   type: "PRIVATE",
    // });
  };

  return (
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        class="btn btn-primary btn-lg px-4 gap-3"
        onClick={handleAdd}
      >
        +1
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        onClick={handleSub}
      >
        -1
      </button>

      <input
        type="text"
        ref={inputref}
        onKeyDown={(event) => handleInputAdd(event)}
      />
      <button onClick={handlePrivate}> Privacy</button>
    </div>
  );
};

export default Controller;
