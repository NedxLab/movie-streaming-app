import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const url = `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US`;

interface IPopularMovieState {
  fetchedPopularMovies: [];
  loading: false | true;
}

const initialState: IPopularMovieState = {
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
      (error: unknown) => console.log(error);
    }
  }
);
const popularSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPopularMovies.pending, (state, action) => {
      // Add user to the state array
      console.log("its working");

      state.loading = false;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log("its working");

      state.loading = false;
      state.fetchedPopularMovies = action.payload.results;
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      // Add user to the state array
      console.log("it was rejected");

      state.loading = false;
    });
  },
});
// export const { popularSlice } =
//   cartSlice.actions;
export default popularSlice.reducer;
