import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likedItemsList: [],
}

const likedSlice = createSlice(
    {
        name: "likedItemsList",
        initialState,
        reducers: {
            addToLikedItems: (state, action) => {
                if (state.likedItemsList.some(item => item.id === action.payload.id)) {
                    state.likedItemsList = state.likedItemsList.filter(item => item.id !== action.payload.id)
                } else {
                    state.likedItemsList.push(action.payload);
                }
            }
        }
    }
)

export const { addToLikedItems } = likedSlice.actions;
export default likedSlice.reducer;