import { createSlice} from "@reduxjs/toolkit";
import { fetchCampers, searchForBackground } from "./opertions";

const campersInitialState = {
    items: [],
    page: 1,
    isLoading: false,
    error: null,
    favorItems: [],
    backgroundImage: null,
    };

const forPending = (state) => {state.isLoading = true};
const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: campersInitialState,
    reducers: {
        addFavor: (state, action) => {
            state.favorItems.push(action.payload);
        },
        delFavor: (state, action) => {
            const index = state.favorItems.findIndex(fav => fav.id === action.payload.id);
            state.favorItems.splice(index, 1);
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchCampers.pending, forPending)
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const updResult = action.payload.map(f => ({...f, id: f._id, _id: undefined}));
            state.items = updResult;
        })
            .addCase(fetchCampers.rejected, forRejected)
        .addCase(searchForBackground.pending)
        .addCase(searchForBackground.fulfilled, (state, action) => {
            state.backgroundImage = action.payload[0].largeImageURL;
        })
            .addCase(searchForBackground.rejected)
    }
});

export const campersReducer = campersSlice.reducer;
export const {addFavor, delFavor} = campersSlice.actions;