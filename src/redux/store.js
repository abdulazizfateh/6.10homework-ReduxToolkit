import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "./features/liked.slice";
import cart from "./features/cart.slice";

export const store = configureStore({
    reducer: {
        likedSlice,
        cart
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.cart));
    localStorage.setItem("likedItems", JSON.stringify(state.likedSlice.likedItemsList))
})