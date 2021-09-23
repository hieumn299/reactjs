import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter", //prefix action type
    initialState: {
        _page: 1,
        _limit: 12,
        type: [],
        brand: [],
        rating: [],
        categories_like: null,
        price_gte: [],
        price_lte: [],
        searchBrand: "",
        name_like: "",
        _sort: "price",
        _order: "asc"
    },
    reducers: {
        changePage: (state, action) => {
            state._page = action.payload;
        },
        changeType: (state, action) => {
            const index = state.type.indexOf(action.payload);
            if (index < 0) {
                state.type.push(action.payload);
            } else {
                state.type.splice(index, 1);
            }
        },
        changeBrand: (state, action) => {
            const index = state.brand.indexOf(action.payload);
            if (index < 0) {
                state.brand.push(action.payload);
            } else {
                state.brand.splice(index, 1);
            }
        },
        changeCategory: (state, action) => {
            state.categories_like = action.payload;
        },
        changeRating: (state, action) => {
            const index = state.rating.indexOf(action.payload);
            if (index < 0) {
                state.rating.push(action.payload);
            } else {
                state.rating.splice(index, 1);
            }
        },
        changePrice: (state, action) => {
            let indexStart = state.price_gte.indexOf(action.payload.start);
            let indexEnd = state.price_lte.indexOf(action.payload.end);
            if (indexStart < 0 && indexEnd < 0) {
                state.price_gte.splice(0, 1, action.payload.start);
                state.price_lte.splice(0, 1, action.payload.end);
            } else {
                state.price_gte.splice(indexStart, 1);
                state.price_lte.splice(indexEnd, 1);
            }
        },
        changePriceInput: (state, action) => {
            state.price_gte.splice(0, 1, action.payload.start);
            state.price_lte.splice(0, 1, action.payload.end);
        },
        searchBrand: (state, action) => {
            state.searchBrand = action.payload;
        },
        changeSort: (state, action) => {
            state._order = action.payload;
        },
        findProduct: (state, action) => {
            state.name_like = action.payload;
        },
        clearFilter: (state, action) => {
            if (action.payload === true) {
                return {
                    _page: 1,
                    _limit: 12,
                    type: [],
                    brand: [],
                    rating: [],
                    categories_like: null,
                    price_gte: [],
                    price_lte: [],
                    searchBrand: "",
                    name_like: "",
                    _sort: "price",
                    _order: "asc"
                };
            }
        }
    }
});

const filterReducer = filterSlice.reducer;

export default filterReducer;
export const changePage = filterSlice.actions.changePage;
export const changeType = filterSlice.actions.changeType;
export const changeBrand = filterSlice.actions.changeBrand;
export const changeCategory = filterSlice.actions.changeCategory;
export const changeRating = filterSlice.actions.changeRating;
export const changePrice = filterSlice.actions.changePrice;
export const changePriceInput = filterSlice.actions.changePriceInput;
export const searchBrand = filterSlice.actions.searchBrand;
export const changeSort = filterSlice.actions.changeSort;
export const findProduct = filterSlice.actions.findProduct;
export const clearFilter = filterSlice.actions.clearFilter;
