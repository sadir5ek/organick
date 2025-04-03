// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItem: []  
// }; 
// const frutsSlice = createSlice({
//   name: "fruts",
//   initialState,
//   reducers: {
//     addCart: (state, action) => {
//       const existingItemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
//       console.log('Adding product:', action.payload); 
    
//       if (existingItemIndex !== -1) {
//         state.cartItem[existingItemIndex].quantity += 1;
//       } else {
//         state.cartItem.push({
//           ...action.payload,
//           quantity: 1  
//         });
//       }
//     },    

//     removeCart: (state, action) => {
//       state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
//     },

//     increaseQuantity: (state, action) => {
//       const item = state.cartItem.find(item => item.id === action.payload);
//       if (item) {
//         item.quantity += 1; 
//       }
//     },

//     decreaseQuantity: (state, action) => {
//       const item = state.cartItem.find(item => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;  
//       }
//     }
//   }
// });

// export const { addCart, removeCart, increaseQuantity, decreaseQuantity } = frutsSlice.actions;
// export default frutsSlice.reducer;


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
        existingItem.stars = stars; // Жылдыздардын жаңыланышы
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

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItem: [],
//   totalAmount: 0, // Жалпы сумма
// };

// const fruitSlice = createSlice({
//   name: "fruts",
//   initialState,
//   reducers: {
//     addCart: (state, action) => {
//       state.cartItem.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
//       state.totalAmount = state.cartItem.reduce((sum, el) => sum + el.totalPrice, 0);
//     },
    
//     increaseQuantity: (state, action) => {
//       const item = state.cartItem.find((el) => el.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//         item.totalPrice = item.quantity * item.price; // Бааны жаңыртабыз
//       }
//       state.totalAmount = state.cartItem.reduce((sum, el) => sum + el.totalPrice, 0);
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.cartItem.find((el) => el.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//         item.totalPrice = item.quantity * item.price; // Бааны жаңыртабыз
//       }
//       state.totalAmount = state.cartItem.reduce((sum, el) => sum + el.totalPrice, 0);
//     },
//     removeCart: (state, action) => {
//       state.cartItem = state.cartItem.filter((el) => el.id !== action.payload);
//       state.totalAmount = state.cartItem.reduce((sum, el) => sum + el.totalPrice, 0);
//     },
//   },
// });

// export const { increaseQuantity, decreaseQuantity, removeCart } = fruitSlice.actions;
// export default fruitSlice.reducer;
