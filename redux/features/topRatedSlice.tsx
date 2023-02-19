import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

interface ITopRatedState {
  topRatedMovies: [];
  unfilteredTopRatedMovies: [];
  url: string;
  loading: false | true;
}

const initialState: ITopRatedState = {
  topRatedMovies: [],
  unfilteredTopRatedMovies: [],
  url: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

  loading: false,
};
export const getTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async (arg, { getState }) => {
    const state = getState();
    try {
      const response = await axios(state.topRatedMovies.url);
      return response.data;
    } catch {
      (error: unknown) => console.log(error);
    }
  }
);
const topRatedSlice = createSlice({
  name: "topRatedMovies",
  initialState,
  reducers: {
    getFilter: (state, { payload }) => {
      state.topRatedMovies = state.unfilteredTopRatedMovies.filter((movie) =>
        movie.genre_ids.includes(payload)
      );
    },
    showMoviePage: (state, { payload }) => {
      state.url = `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${payload}`;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTopRatedMovies.pending, (state, action) => {
      // Add user to the state array
      // console.log("its working");

      state.loading = false;
    });
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.topRatedMovies = action.payload.results;
      if (state.unfilteredTopRatedMovies.length === 0) {
        state.unfilteredTopRatedMovies = action.payload.results;
      }
    });
    builder.addCase(getTopRatedMovies.rejected, (state, action) => {
      // Add user to the state array
      console.log("it was rejected");

      state.loading = false;
    });
  },
});
export const { getFilter, showMoviePage } = topRatedSlice.actions;
export default topRatedSlice.reducer;
