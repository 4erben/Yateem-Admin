import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getProducts = createAsyncThunk(
    "admin/getCards",
    async(args)=>{
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects`);
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message  || "An Error Occured")
            }
            const cards = await res.json();
            return cards;
        }catch(err){
            console.log(err);
            return err.message;
        }
    }
);




export const createNewCard = createAsyncThunk(
    "admin/createProduct",
    async(args ,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
        const { ...formData } = args;
        const data = new FormData();
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
            data.append(key, formData[key]);
            }
        }
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects`,{
                method:"POST",
                headers:{
                    "Authorization": `Bearer ${token}`
                },
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
    async(args ,{rejectWithValue})=>{
      /*   const token = JSON.parse(localStorage.getItem("token")); */
        const { id  } = args;
        console.log(args);
        try{
            const res = await fetch(`https://waqf-alyatim.com/api/projects/${id}`
                ,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(args)
                });
            console.log(res);
            if (!res.ok) {
                throw new Error(`HTTP error ! Status: ${res.status}`);
            }
            const card = await res.json();
            return card;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.message);
        }
    }
)

export const removeCard = createAsyncThunk(
    "admin/removeCard",
    async(args,{rejectWithValue})=>{
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        const {cardId} = args;
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects/${cardId}`,{
                method:"DELETE",
                headers:{
                    "Authorization": `Bearer ${token}`
                }
                });
                if(!res.ok){
                    throw new Error(res.status);
                }
                /* const response =  await res.json(); */
              /*   return response; */
        }catch(err){
        return rejectWithValue(err.message)
            }
    }
)

const cardSlice = createSlice({
   name: "card",
    initialState:{
        cards: [],
        product: null,
        status: null,
        isLoading: false,
        err:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getProducts.pending,(state,action)=>{
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.cards = action.payload;
        })
        .addCase(getProducts.rejected,(state,action)=>{
        })
        .addCase(createNewCard.pending,(state,action)=>{
            state.status = "loading"
        })
        .addCase(createNewCard.fulfilled,(state,action)=>{
            state.product = action.payload;
            state.status = "success"
        })
        .addCase(createNewCard.rejected,(state,action)=>{
            state.status = "failed"
        })
        .addCase(removeCard.pending,(state,action)=>{
            state.status = "loading"
        })
        .addCase(removeCard.fulfilled,(state,action)=>{
            state.status = "success"
        })
        .addCase(removeCard.rejected,(state,action)=>{
            state.status = "failed";
            if(action.payload == 404){
                state.err = "لا يوجد اهداء بهذا الرقم"
            };
        })
    }
})

export default cardSlice.reducer;