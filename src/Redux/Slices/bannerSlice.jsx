import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewBanner = createAsyncThunk(
    "banner/createBanner",
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
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/images`,{
                method:"POST",
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
export const getBanners = createAsyncThunk(
    "banner/getBanners",
    async(args ,{rejectWithValue})=>{
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/images`);
            if(!res.ok){
                throw new Error(res.status)
            }
            const card = await res.json();
            return card;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.message) ;
        }
    }
);

export const editBanner = createAsyncThunk(
    "banner/editBanner",
    async(args,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
        const {id, ...formData } = args;
         console.log( "id is :",id , formData);
        const data = new FormData();
       /*  data.append("token",token); */
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
            data.append(key, formData[key]);
            }
        }
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/images/${id}`,{
                method:"PUT",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
                body:data
            });
            if(!res.ok){
                throw new Error(res.status);
            }
                const response = await res.json();
                return response;
        }catch(err){
        console.log(err)
        return rejectWithValue(err.message);
            }
    }
);

export const removeBanner = createAsyncThunk(
    "banner/removeBanner",
    async(args,{rejectWithValue})=>{
        const {token} = JSON.parse(localStorage.getItem("token"));
        const {id} = args;
        console.log("slice id ", id);
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/images/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if(res.ok){

            }
        }catch(err){
        console.log(err)
        return rejectWithValue(err.message);
            }
    }
)

const bannerSlice = createSlice({
   name: "banner",
    initialState:{
        banners: [],
        err:null,
        status :"idle",
        isLoading:false
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createNewBanner.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(createNewBanner.fulfilled,(state,action)=>{
            state.banners = state.banners.push(action.payload);
            state.isLoading = false
        })
        .addCase(createNewBanner.rejected,(state,action)=>{
            state.err = action.payload.message;
            state.isLoading = false
        })
        .addCase(removeBanner.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(removeBanner.fulfilled,(state,action)=>{
            state.isLoading = false
        })
        .addCase(removeBanner.rejected,(state,action)=>{
            state.isLoading = false
        })
        .addCase(editBanner.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(editBanner.fulfilled,(state,action)=>{
            state.isLoading = false
            state.status = "success"
        })
        .addCase(editBanner.rejected,(state,action)=>{
            state.isLoading = false
            state.status = "failed"
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