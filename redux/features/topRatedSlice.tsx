import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const url = `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

interface ITopRatedState {
  topRatedMovies: [];
  unfilteredTopRatedMovies: [];
  loading: false | true;
}

const initialState: ITopRatedState = {
  topRatedMovies: [],
  unfilteredTopRatedMovies: [],
  loading: false,
};
export const getTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async () => {
    try {
      const response = await axios(url);
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
      state.unfilteredTopRatedMovies = action.payload.results;
    });
    builder.addCase(getTopRatedMovies.rejected, (state, action) => {
      // Add user to the state array
      console.log("it was rejected");

      state.loading = false;
    });
  },
});
export const { getFilter } = topRatedSlice.actions;
export default topRatedSlice.reducer;
