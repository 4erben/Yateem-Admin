import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewBanner = createAsyncThunk(
    "banner/createProduct",
    async(args)=>{
      /*   const {token} = JSON.parse(localStorage.getItem("user")); */
      console.log(args);
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/logos`,{
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

export const editBanner = createAsyncThunk(
    "banner/removeProduct",
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
);

export const removeBanner = createAsyncThunk(
    "banner/removeProduct",
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

const bannerSlice = createSlice({
   name: "banner",
    initialState:{
        product: null,
        err:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createNewBanner.pending,(state,action)=>{

        })
        .addCase(createNewBanner.fulfilled,(state,action)=>{
            state.product = action.payload;
        })
        .addCase(createNewBanner.rejected,(state,action)=>{

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

export default bannerSlice.reducer;