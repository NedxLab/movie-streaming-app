import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
console.log(API_KEY);

const url = `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;

const initialState = {
  fetchedMovies: [],
  loading: false,
};
export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch {
    (error) => console.log(error);
  }
});
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, payload) => {
      console.log(action);

      state.loading = false;
      state.fetchedMovies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
// export const { movieSlice } =
//   cartSlice.actions;
export default movieSlice.reducer;
