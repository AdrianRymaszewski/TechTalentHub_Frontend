import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthSlice,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    }
})

export const authSliceActions = authSlice.actions;

export default authSlice.reducer;