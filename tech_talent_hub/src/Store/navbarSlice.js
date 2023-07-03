import { createSlice } from "@reduxjs/toolkit";

const initialNavbarState = {
    anchorElNav: null,
    anchorElUser: null,
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: initialNavbarState,
    reducers: {
        changeAnchorElNav(state, action) {
            state.anchorElNav = action.payload
        },
        changeAnchorElUser(state, action) {
            state.anchorElUser = action.payload
        }
    },
});

export const navSliceActions = navbarSlice.actions;
export default navbarSlice.reducer;