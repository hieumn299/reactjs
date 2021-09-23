import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getProductsSidebar = createAsyncThunk(
    "sidebar/getProducts",
    async (params) => {
        const response = await productsAPI.getProducts(params);
        return response;
    }
);

const productsSidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        products: []
    },
    extraReducers: {
        [getProductsSidebar.fulfilled]: (state, action) => {
            state.products = action.payload;
        }
    }
});
const productsSidebarReducer = productsSidebarSlice.reducer;

export default productsSidebarReducer;
