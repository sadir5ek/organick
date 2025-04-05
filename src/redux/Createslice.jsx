import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const fruitSlice = createSlice({
  name: "fruts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { id, name, userName, price, img, stars } = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.stars = stars; 
      } else {
        state.cartItem.push({ id, name, userName, price, img, quantity: 1, stars });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCart, increaseQuantity, decreaseQuantity, removeCart } = fruitSlice.actions;
export default fruitSlice.reducer;
