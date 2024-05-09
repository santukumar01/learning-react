import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controller = () => {
  const inputref = useRef();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "ADD" });
  };
  const handleSub = () => {
    dispatch({ type: "SUB" });
  };

  const handleInputAdd = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "INPUT_ADD",
        payload: { value: inputref.current.value },
      });
    }
  };

  const handlePrivate = () => {
    dispatch({
      type: "PRIVATE",
    });
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
