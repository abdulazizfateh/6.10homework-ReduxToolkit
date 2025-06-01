import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "./features/liked.slice"

export const store = configureStore({
    reducer: {
        likedSlice
    }
})