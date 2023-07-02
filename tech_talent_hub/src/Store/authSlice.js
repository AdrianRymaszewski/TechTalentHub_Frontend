import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
    isModalOpen:false,
    isAuthenticated: false,
    userData:{email:'', password:''}
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
        updateUserData(state, action){
            state.userData = action.payload;
        },
        triggerModal(state, action){
            state.isModalOpen = action.payload;
        }
    }
})

export const authSliceActions = authSlice.actions;

export default authSlice.reducer;
