import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3000/api/campers';

export const fetchFilms = createAsyncThunk('films/fetchAll', async(_, thunkAPI) => {
    try{
        const result = await axios.get('/');
        return result.data;
    } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
});