import {configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import AdminSlice from "./Slices/AdminSlice";
import AppSlice from "./Slices/AppSlice";
const store = configureStore({
    reducer:{
        cart : cartReducer,
        admin: AdminSlice,
        app: AppSlice
    }
})

export default store;