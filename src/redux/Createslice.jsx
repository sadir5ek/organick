import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: []
};

const frutsSlice = createSlice({
  name: "fruts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cartItem.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (!existingItem.quantity) {
          existingItem.quantity = 1;
        }
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItem.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItem.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const { addCart, removeCart, increaseQuantity, decreaseQuantity } = frutsSlice.actions;
export default frutsSlice.reducer;
