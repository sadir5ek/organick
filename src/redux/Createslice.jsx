import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: []
};

const frutsSlice = createSlice({
  name: "fruts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartItem.push(action.payload);
    }
  }
});

export const { addCart } = frutsSlice.actions;
export default frutsSlice.reducer;
