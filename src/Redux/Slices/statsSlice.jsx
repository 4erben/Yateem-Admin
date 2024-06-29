import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPayments = createAsyncThunk(
    "stats/getPayments",
    async(args ,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
          try{
              const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/payments`,{
                  method:"GET",
                  headers:{
                    "Authorization" : `Bearer ${token}`
                  }
              });
              if (!res.ok) {
                  const errorData = await res.json();
                  throw new Error(errorData.message  || "An Error Occured");
              }
              const payments = await res.json();
              console.log(payments);
              if(res.ok){
                  localStorage.setItem("payments",JSON.stringify(payments));
              }
              return payments;
          }catch(err){
              console.log(err);
              return rejectWithValue(err.message);
          }
      }
)

export const getStats = createAsyncThunk(
    "stats/getStats",
    async(args ,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
          try{
              const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/donation-statistics`,{
                  method:"GET",
                  headers:{
                    "Authorization" : `Bearer ${token}`
                  }
              });
              if (!res.ok) {
                  const errorData = await res.json();
                  throw new Error(errorData.message  || "An Error Occured");
              }
              const stats = await res.json();
              if(res.ok){
                  localStorage.setItem("stats",JSON.stringify(stats));
              }
              return stats;
          }catch(err){
              console.log(err);
              return rejectWithValue(err.message);
          }
      }
)



const statsSlice = createSlice({
    name: "stats",
     initialState:{

         payments:[],
         stats:[],
         err:null,
         loading: false,
         success: false
     },
     reducers:{},
     extraReducers(builder){
         builder
         .addCase(getPayments.pending,(state,action)=>{
 
         })
         .addCase(getPayments.fulfilled,(state,action)=>{
             state.payments = action.payload.payments;
         })
         .addCase(getPayments.rejected,(state,action)=>{
             
         })
         .addCase(getStats.pending,(state,action)=>{
 
         })
         .addCase(getStats.fulfilled,(state,action)=>{
             state.stats = action.payload;
         })
         .addCase(getStats.rejected,(state,action)=>{
             
         })
     }
 })
 
 /* export const {} =authSlice.actions; */
 export default statsSlice.reducer;