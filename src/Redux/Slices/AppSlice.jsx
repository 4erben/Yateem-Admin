import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isIconOn: false,
        isMobileOn:false
    },
    reducers:{
        switchIcons:(state,action)=>{
            state.isIconOn = !state.isIconOn;
        },
        switchMobile:(state,action)=>{
            state.isMobileOn = !state.isMobileOn;
        }
    }
});
export const { switchIcons ,switchMobile} = appSlice.actions;
export default appSlice.reducer;