import rootReducer from "./reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
});

export default store;
