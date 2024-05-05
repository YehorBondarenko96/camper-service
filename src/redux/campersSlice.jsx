import { createSlice} from "@reduxjs/toolkit";
import { fetchCampers, searchForBackground, postBooking } from "./opertions";

const campersInitialState = {
    items: [],
    page: 1,
    isLoading: false,
    error: null,
    favorItems: [],
    backgroundImage: null,
    bookingItems: [],
    showLoadMoreButCatalog: true,
    scrollValueCatalog: 0
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
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setScrollValueCatalog: (state, action) => {
            state.scrollValueCatalog = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchCampers.pending, forPending)
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const updResult = action.payload.map(f => ({ ...f, id: f._id, _id: undefined }));
            if (updResult.length < 4) {
                state.showLoadMoreButCatalog = false;
            };
            updResult.forEach(item => { 
                if (!state.items.find(i => i.id === item.id)) {
                    state.items.push(item)
                }
            });
        })
            .addCase(fetchCampers.rejected, forRejected)
        .addCase(searchForBackground.pending)
        .addCase(searchForBackground.fulfilled, (state, action) => {
            state.backgroundImage = action.payload[0].largeImageURL;
        })
            .addCase(searchForBackground.rejected)
        .addCase(postBooking.pending, forPending)
        .addCase(postBooking.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const updResult = { ...action.payload, id: action.payload._id, _id: undefined };
            state.bookingItems.push(updResult);
        })
            .addCase(postBooking.rejected, forRejected)
    }
});

export const campersReducer = campersSlice.reducer;
export const {addFavor, delFavor, setPage, setScrollValueCatalog} = campersSlice.actions;