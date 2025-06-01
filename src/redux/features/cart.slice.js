import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    uniqueCart: []
}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state, action) => {
                state.cart.push(action.payload);
                const isDuplicate = state.uniqueCart.some(item => item.id === action.payload.id);
                if (!isDuplicate) {
                    state.uniqueCart.push(action.payload);
                }
            },
            removeFromCart: (state, action) => {
                state.cart.filter(item => item.id !== action.payload.id);
            },
        }
    }
)

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer