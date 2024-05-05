import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const authConfig = {
    key: 'campers',
    storage,
    whitelist: ['favorItems'],
};

export const store = configureStore({
    reducer: {
        campers: persistReducer(authConfig, campersReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

