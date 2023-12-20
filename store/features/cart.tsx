import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const carts = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addSuccuss: (state) => {
      state.value += 1;
    },
  },
});

export const { addSuccuss } = carts.actions;
export default carts.reducer;
