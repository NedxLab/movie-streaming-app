import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

interface IPopularTvShows {
  fetchedPopularShows: [];
  unfilteredPopularShows: [];
  url: string;
  loading: false | true;
}

const initialState: IPopularTvShows = {
  fetchedPopularShows: [],
  unfilteredPopularShows: [],
  url: `${baseUrl}/tv/popular?api_key=${API_KEY}&language=en-US&page=2`,
  loading: false,
};
export const getPopularShows = createAsyncThunk(
  "movies/getPopularShows",
  async (arg, { getState }) => {
    const state = getState();
    try {
      const response = await axios(state.popularShows.url);
      return response.data;
    } catch {
      (error: unknown) => console.log(error);
    }
  }
);
const tvshowsSlice = createSlice({
  name: "popularShows",
  initialState,
  reducers: {
    showpage: (state, { payload }) => {
      state.url = `${baseUrl}/tv/popular?api_key=${API_KEY}&language=en-US&page=${payload}`;
      getPopularShows();
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPopularShows.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(getPopularShows.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log("its working");

      state.loading = false;
      state.fetchedPopularShows = action.payload.results;
      state.unfilteredPopularShows = action.payload.results;
    });
    builder.addCase(getPopularShows.rejected, (state, action) => {
      // Add user to the state array

      state.loading = false;
    });
  },
});
export const { showpage } = tvshowsSlice.actions;
export default tvshowsSlice.reducer;
