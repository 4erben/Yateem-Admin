import {configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/cardSlice";
import AppSlice from "./Slices/AppSlice";
import authSlice from "./Slices/authSlice";
import bannerSlice from "./Slices/bannerSlice";
const store = configureStore({
    reducer:{
        card: cardSlice,
        app: AppSlice,
        auth: authSlice,
        banner: bannerSlice
    }
})

export default store;