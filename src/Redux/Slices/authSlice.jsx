import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "auth/login",
    async(args ,{rejectWithValue})=>{
      const data = new FormData();
      for (const key in args) {
        if (args.hasOwnProperty(key)) {
            data.append(key, args[key]);
        }
    }
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/login`,{
                method:"POST",
                body: data
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const auth = await res.json();
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(auth.user));
                localStorage.setItem("token",JSON.stringify(auth.access_token));
            }
            return auth;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.message);
        }
    }
);
export const register = createAsyncThunk(
    "auth/register",
    async(args)=>{
        try{
             const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/register`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email:args.email,
                        password:args.password,
                        name: args.name
                    })
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(data));
            }
            return data;
        }catch(err){
            console.log(err);
            return err
        }
    });



export const logout = createAsyncThunk(
    "auth/logout",
    async(user)=>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
)


const authSlice = createSlice({
   name: "auth",
    initialState:{
        token: null,
        user:null,
        err:null,
        loading: false,
        success: false
    },
    reducers:{
        setCredentials:(state,action)=>{
            const {user , access_token} = action.payload;
            state.user = user;
            state.token = access_token;
        },
        setLogOut:(state,action)=>{
            state.user = null;
            state.token = null;
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    },
    extraReducers(builder){
        builder
        .addCase(login.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.loading = false;
            state.token = action.payload.access_token;
            state.user = action.payload.user;
            localStorage.setItem("token",JSON.stringify(action.payload.access_token));
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            state.success = true
        })
        .addCase(login.rejected,(state,action)=>{
            state.loading = false
            state.err = action.payload
            state.success = false
        })
        .addCase(register.pending,(state,action)=>{
            state.loading = true;
            state.err = null;
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.loading = false;
            if(action.payload.error){
                state.err = action.payload.error;
                state.user = null;
            }else{
                state.user = action.payload;
            }
        })
        .addCase(register.rejected,(state,action)=>{
            state.loading = false;
            state.err= action.error.message;
        })
        .addCase(logout.pending,(state,action)=>{

        })
        .addCase(logout.fulfilled,(state,action)=>{
            state.user = null
        })
        .addCase(logout.rejected,(state,action)=>{
            
        })
    }
})

export const {setUser , setCredentials , setLogOut} =authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) =>state.auth.user;
export const selectCurrentToken = (state) =>state.auth.token;