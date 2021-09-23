import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar", //prefix action type
    initialState: {
        type: [],
        brand: [],
        categories_like: null,
        name_like: "",
        _sort: "price",
        _order: ""
    },
    reducers: {
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
        clearFilter: (state, action) => {
            if (action.payload === true) {
                return {
                    type: [],
                    brand: [],
                    categories_like: null,
                    name_like: "",
                    _sort: "price",
                    _order: "asc"
                };
            }
        }
    }
});

const sidebarReducer = sidebarSlice.reducer;

export default sidebarReducer;
export const changeTypeSidebar = sidebarSlice.actions.changeType;
export const changeBrandSidebar = sidebarSlice.actions.changeBrand;
export const changeCategorySidebar = sidebarSlice.actions.changeCategory;
export const clearFilterSidebar = sidebarSlice.actions.clearFilter;
