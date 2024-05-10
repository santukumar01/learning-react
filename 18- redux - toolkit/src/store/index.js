import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import privateSlice from "./privacy";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    private: privateSlice.reducer,
  },
});

export default counterStore;

/* 

import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  private: false,
};

const couterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "ADD") {
    return { ...store, counter: store.counter + 1 }; // spread op chnage the required field as onbject are key:value
  } else if (action.type === "SUB") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "INPUT_ADD") {
    let number1 = Number(action.payload.value);
    return { ...store, counter: store.counter + number1 };
  } else if (action.type === "PRIVATE") {
    return { ...store, private: !store.private };
  }
  // console.log(newStore);
  return store;
};

*/
