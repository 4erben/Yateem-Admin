import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewCard = createAsyncThunk(
    "admin/createProduct",
    async(args)=>{
      /*   const {token} = JSON.parse(localStorage.getItem("user")); */
      console.log(args);
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/card`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(args)
            });
            const card = await res.json();
            return card;
        }catch(err){
            console.log(err);
            return err.message;
        }
        
    }
);
export const editCard = createAsyncThunk(
    "admin/removeProduct",
    async(args)=>{
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/card`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                   /*  "Authorization": `Bearer ${token}` */
                },
                body:JSON.stringify(args)
            });
                const response = await res.json();
                return response;
        }catch(err){
        console.log(err)
        return err.message
            }
    }
)

export const removeCard = createAsyncThunk(
    "admin/removeProduct",
    async(args)=>{
       /*  const {token} = JSON.parse(localStorage.getItem("user")); */
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/card`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                   /*  "Authorization": `Bearer ${token}` */
                },
                body:JSON.stringify(args)
            });
                const response = await res.json();
                return response;
        }catch(err){
        console.log(err)
        return err.message
            }
    }
)

const adminSlice = createSlice({
   name: "admin",
    initialState:{
        product: null,
        err:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createNewCard.pending,(state,action)=>{

        })
        .addCase(createNewCard.fulfilled,(state,action)=>{
            state.product = action.payload;
        })
        .addCase(createNewCard.rejected,(state,action)=>{

        })
        .addCase(removeCard.pending,(state,action)=>{

        })
        .addCase(removeCard.fulfilled,(state,action)=>{
            state.product = action.payload;
        })
        .addCase(removeCard.rejected,(state,action)=>{

        })
    }
})

export default adminSlice.reducer;