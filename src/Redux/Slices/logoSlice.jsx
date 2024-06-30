import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const editLogo = createAsyncThunk(
    "logo/editLogo",
    async(args,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
        const { ...formData } = args;
        const data = new FormData();
/*         data.append("token",token); */
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
            data.append(key, formData[key]);
            }
        }
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/logos`,{
                method:"PUT",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
                body:data
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const card = await res.json();
            return card;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.message)
        } 
    }
);



const bannerSlice = createSlice({
    name: "logo",
     initialState:{
         logo: null,
         err:null,
         isLoading:false

     },
     reducers:{},
     extraReducers(builder){
         builder
         .addCase(createNewBanner.pending,(state,action)=>{
             state.isLoading = true;
         })
         .addCase(createNewBanner.fulfilled,(state,action)=>{
             state.logo = action.payload.logo;
             state.isLoading = false
         })
         .addCase(createNewBanner.rejected,(state,action)=>{
             state.err = action.payload.message;
             state.isLoading = false
         })

     }
 })
 
 export default bannerSlice.reducer;