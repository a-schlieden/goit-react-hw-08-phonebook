import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./authentication.initstate";
import { register } from './authentication.thunk'

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
    }
})

export default authSlice.reducer;
