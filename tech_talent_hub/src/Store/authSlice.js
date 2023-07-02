import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
    isLoginModalOpen:false,
    isRegisterModalOpen:false,
    userData:{
        login:{email:'', password:''},
        register:{email:'', password:'', firstName:'', lastName:''}
    }
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthSlice,
    reducers:{
        updateLoginUserData(state, action){
            state.userData.login = action.payload;
        },
        updateRegisterUserData(state, action){
            state.userData.register = action.payload;
        },
        triggerLoginModal(state, action){
            state.isLoginModalOpen = action.payload;
        },
        triggerRegisterModal(state, action){
            state.isRegisterModalOpen = action.payload;
        }
    }
})

export const authSliceActions = authSlice.actions;

export default authSlice.reducer;
