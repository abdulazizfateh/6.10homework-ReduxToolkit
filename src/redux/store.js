import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "./features/liked.slice";
import cart from "./features/cart.slice";

export const store = configureStore({
    reducer: {
        likedSlice,
        cart
    }
})