import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state, action) => {
                const existingItem = state.cart.find(product => product.id === action.payload.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.cart.push({ ...action.payload, quantity: 1 });
                }
            },
            removeFromCart: (state, action) => {
                const existingItem = state.cart.find(product => product.id === action.payload.id);
                if (existingItem) {
                    if (existingItem.quantity > 1) {
                        existingItem.quantity -= 1;
                    } else {
                        state.cart = state.cart.filter(product => product.id !== action.payload.id);
                    }
                }
            },
            removeProductCompletely: (state, action) => {
                state.cart = state.cart.filter(product => product.id !== action.payload.id);
            },
            clearCart: (state) => {
                state.cart = [];
            },
        }
    }
)



export const { addToCart, removeFromCart, removeProductCompletely, clearCart } = cartSlice.actions;
export default cartSlice.reducer