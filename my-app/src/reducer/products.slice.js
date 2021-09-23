import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (params) => {
        const response = await productsAPI.getProducts(params);
        return response;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
        }
    }
});

const productsReducer = productsSlice.reducer;

export default productsReducer;
