import { createSlice } from "@reduxjs/toolkit";

const privateSlice = createSlice({
  name: "private",
  initialState: false,
  reducers: {
    privacy: (state, action) => {
      // by default only expresssion is returned
      return !state;
    },
  },
});

export const privateAction = privateSlice.actions;
export default privateSlice;
