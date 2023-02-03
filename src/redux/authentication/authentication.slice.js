import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./authentication.initstate";
import { register, login, logout, refreshUser } from './authentication.thunk'

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },
        [logout.fulfilled]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.pending]: (state, action) => {
            // state.user = { ...action.payload };
            // state.isLoggedIn = true;
        },
        [refreshUser.fulfilled]: (state, action) => {
            state.user = { ...action.payload };
            state.isLoggedIn = true;
        },
        [refreshUser.rejected]: (state, action) => {
            // state.user = { ...action.payload };
            // state.isLoggedIn = true;
        },
    }
})

export default authSlice.reducer;
