import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'; // Make sure to import the reducer correctly
import productSlice from './productSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;