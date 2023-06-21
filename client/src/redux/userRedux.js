import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },   
        loginFailure:(state)=>{
            state.error=true;
            state.isFetching=false;
        },
        logoutSuccess:(state)=>{
            state.currentUser=null;
        },
        signinStart:(state)=>{
            state.isFetching=true;
        },
        signinSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },   
        signinFailure:(state)=>{
            state.error=true;
            state.isFetching=false;
        },

    }
})

export const {loginStart,loginSuccess,loginFailure,logoutSuccess,signinStart,signinSuccess,signinFailure}=userSlice.actions;
export default userSlice.reducer;