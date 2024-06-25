import {configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/cardSlice";
import AppSlice from "./Slices/AppSlice";
import authSlice from "./Slices/authSlice";
const store = configureStore({
    reducer:{
        card: cardSlice,
        app: AppSlice,
        auth: authSlice
    }
})

export default store;