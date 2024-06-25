import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewBanner = createAsyncThunk(
    "banner/createBanner",
    async(args,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        const { ...formData } = args;
        const data = new FormData();
        data.append("token",token);
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
            data.append(key, formData[key]);
            }
        }
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/logos`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
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
export const getBanners = createAsyncThunk(
    "banner/getBanners",
    async(args)=>{
        const token = JSON.parse(localStorage.getItem("token"));
      console.log(args);
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/logos?token=${token}`);
            if(!res.ok){
                throw new Error("Error Occured")
            }
            const card = await res.json();
            return card;
        }catch(err){
            console.log(err);
            return err.message;
        }
    }
);

export const editBanner = createAsyncThunk(
    "banner/removeBanner",
    async(args)=>{
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/logos`,{
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
        banners: [],
        err:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createNewBanner.pending,(state,action)=>{

        })
        .addCase(createNewBanner.fulfilled,(state,action)=>{
            state.banners = state.banners.push(action.payload);
        })
        .addCase(createNewBanner.rejected,(state,action)=>{
            state.err = action.payload.message;
        })
        .addCase(removeBanner.pending,(state,action)=>{

        })
        .addCase(removeBanner.fulfilled,(state,action)=>{
            state.product = action.payload;
        })
        .addCase(removeBanner.rejected,(state,action)=>{

        })
        .addCase(getBanners.pending,(state,action)=>{

        })
        .addCase(getBanners.fulfilled,(state,action)=>{
            state.banners = action.payload;
        })
        .addCase(getBanners.rejected,(state,action)=>{
            state.err = action.payload.message;
        })
    }
})

export default bannerSlice.reducer;