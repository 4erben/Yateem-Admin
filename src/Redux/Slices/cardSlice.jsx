import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewCard = createAsyncThunk(
    "admin/createProduct",
    async(args ,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
        const { ...formData } = args;
        const data = new FormData();
        data.append("token",token);
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
            data.append(key, formData[key]);
            }
        }
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects`,{
                method:"POST",
                body: data
            });
            console.log(res);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const card = await res.json();
            return card;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.message);
        }
        
    }
);
export const editCard = createAsyncThunk(
    "admin/editCard",
    async(args)=>{
        const token = JSON.parse(localStorage.getItem("token"));
        const id = args.cardId;
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects`,{
                method:"PUT",
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
        const token = JSON.parse(localStorage.getItem("token"));
        const {cardId, title} = args;
        console.log("args:" , args);
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects/${id}?title=${title}&token=${token}`,{
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

const cardSlice = createSlice({
   name: "card",
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

export default cardSlice.reducer;