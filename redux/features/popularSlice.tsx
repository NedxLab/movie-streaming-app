import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

const url = `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US`;

const initialState = {
  fetchedPopularMovies: [],
  loading: false,
};
export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async () => {
    try {
      const response = await axios(url);
      return response.data;
    } catch {
      (error) => console.log(error);
    }
  }
);
const popularSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {},
  extraReducers: {
    [getPopularMovies.pending]: (state) => {
      state.loading = true;
    },
    [getPopularMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.fetchedPopularMovies = action.payload.results;
    },
    [getPopularMovies.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
// export const { popularSlice } =
//   cartSlice.actions;
export default popularSlice.reducer;
