import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const authToken = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``
    }
}


export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            authToken.set(response.data.token)
            toast.success('Success !');
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", credentials);
            authToken.set(response.data.token)
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            authToken.unset()
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const usersState = thunkAPI.getState();
        const usersToken = usersState.auth.token

        if (usersToken === null) {
            return thunkAPI.rejectWithValue();
        }
        authToken.set(usersToken)
        try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
