import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Createslice'

const store = configureStore({
    reducer: {
        fruts: cartReducer,
    },
});

export default store;