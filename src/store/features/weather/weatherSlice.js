import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  weatherData: {},
  searchedQuery: "",
  cityWeather: {},
  error: "",
  measurement: "f",
};

export const fetchWeatherData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("/data.json");
  return response.data;
});


export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    setCityWeather: (state, action) => {
      state.cityWeather = action.payload;
    },
    setMeasurement: (state, action) => {
      state.measurement = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setWeatherData, setSearchedQuery, setCityWeather, setMeasurement } = weatherSlice.actions;

export default weatherSlice.reducer;
