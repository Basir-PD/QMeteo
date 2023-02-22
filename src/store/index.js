import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
// Reducers
import weatherReducer from "./features/weather/weatherSlice";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

let persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
