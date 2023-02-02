import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const authToken = {
    set(token) {
        axios.defaults.headers.common.Autorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Autorization = ``
    }
}


export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            // authToken.set(response.data.token)
            toast.success('Success !');
            return response.data;
        } catch (err) {
            //toast.error('Error !');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", credentials);
            // authToken.set(response.data.token)
            //toast.success('Success !');
            return response.data;
        } catch (err) {
            //toast.error('Error !');
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
