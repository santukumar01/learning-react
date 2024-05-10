import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      console.log(state);
      // here we are dirctly changing in state but in backend toolkit makes a copy of state and gives us
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.value);
    },
  },
});

// defining and exporting the action
export const couterAction = counterSlice.actions;

export default counterSlice;
