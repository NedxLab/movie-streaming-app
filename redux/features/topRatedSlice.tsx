import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

const url = `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

const initialState = {
  topRatedMovies: [],
  loading: false,
};
export const getTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async () => {
    try {
      const response = await axios(url);
      return response.data;
    } catch {
      (error) => console.log(error);
    }
  }
);
const topRatedSlice = createSlice({
  name: "topRatedMovies",
  initialState,
  reducers: {},
  extraReducers: {
    [getTopRatedMovies.pending]: (state) => {
      state.loading = true;
    },
    [getTopRatedMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.topRatedMovies = action.payload.results;
    },
    [getTopRatedMovies.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
// export const { movieSlice } =
//   cartSlice.actions;
export default topRatedSlice.reducer;
