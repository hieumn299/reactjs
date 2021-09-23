import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getTotalCount = createAsyncThunk(
    "products/getTotalCount",
    async (params) => {
        const response = await productsAPI.getTotalCount(params);
        return response;
    }
);

const totalPageSlice = createSlice({
    name: "totalPage",
    initialState: {
        totalPage: 0
    },
    extraReducers: {
        [getTotalCount.fulfilled]: (state, action) => {
            state.totalPage = action.payload;
        }
    }
});

const totalPageReducer = totalPageSlice.reducer;
export default totalPageReducer;
