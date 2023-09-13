import { Store, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PayloadAction } from "@reduxjs/toolkit";
import store from "./store";
import { AnyAction } from 'redux';
import axios from 'axios';

interface ProductItem {
    cartData: any[];
}


export const getProducts = createAsyncThunk('products', async () => {
    const response = await axios.get('http://localhost:5000/api');
    console.log(response);
    return response.data;
});


const productSlice = createSlice({
    name: 'products',
    initialState: { cartData: [] } as ProductItem,
    reducers: {
        getProducts(state, action: PayloadAction<any[]>) {
            state.cartData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.rejected, (state) => {
            state.cartData = [];
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.cartData = action.payload;
        });
    }
});



export default productSlice.reducer;









