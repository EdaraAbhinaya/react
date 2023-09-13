import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartItem[],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
