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
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/admin/login`,{
                method:"POST",
                body: data
            });
            if (!res.ok) {
                const errorData = await res.json();
                console.log("error" , errorData);
                throw new Error(errorData.error  || "An Error Occured");
            }
            const auth = await res.json();
            console.log(auth);
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(auth.admin));
                localStorage.setItem("token",auth.token);
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
             const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/admin/register`,{
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
                const errorData = await res.json();
                throw new Error(errorData.error  || "An Error Occured")
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
        payments:null,
        stats:null,
        err:null,
        loading: false,
        success: false
    },
    reducers:{
        setCredentials:(state,action)=>{
            const {admin , token} = action.payload;
            state.user = admin;
            state.token = token;
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
            state.token = action.payload.token;
            state.user = action.payload.admin;
            localStorage.setItem("token",JSON.stringify(action.payload.token));
            localStorage.setItem("user",JSON.stringify(action.payload.admin));
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
            state.user = action.payload.admin;

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