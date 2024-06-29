import {configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/cardSlice";
import AppSlice from "./Slices/AppSlice";
import authSlice from "./Slices/authSlice";
import bannerSlice from "./Slices/bannerSlice";
import statsSlice from "./Slices/statsSlice";
const store = configureStore({
    reducer:{
        card: cardSlice,
        app: AppSlice,
        auth: authSlice,
        banner: bannerSlice,
        stats: statsSlice
    }
})

export default store;