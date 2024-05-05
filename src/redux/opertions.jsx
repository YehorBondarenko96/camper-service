import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://camper-service-backend-p69o.onrender.com/api/campers';
axios.defaults.baseURL = 'http://localhost:3000/api/campers';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async(page, thunkAPI) => {
    try{
        const result = await axios.get('/', {page});
        return result.data;
    } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
});

export const postBooking = createAsyncThunk('booking/postBooking', async (data, thunkAPI) => {
    try {
        const result = await axios.post('/booking', data);
        return result.data;
    } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
});



export const searchForBackground = createAsyncThunk('images/fetchAll', async(_, thunkAPI) =>{
    try{
        const messyResult = await axios.get(`https://pixabay.com/api/?q=camping&page=1&key=40289268-709deefe1360f0520e7e421a0&image_type=photo&orientation=horizontal`);
        return messyResult.data.hits
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});