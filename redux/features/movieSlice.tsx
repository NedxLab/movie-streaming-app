import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface movieState {
  fetchedMovies: [];
  loading: false | true;
}

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const url = `${baseUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US`;

const initialState = {
  fetchedMovies: [],
  loading: false,
} as movieState;

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  try {
    const response = await axios(url);
    console.log(response);

    return response.data;
  } catch {
    (error: unknown) => console.log(error);
  }
});
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getMovies.pending, (state, action) => {
      // Add user to the state array
      console.log("its working");

      state.loading = false;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("its working");

      state.loading = false;
      state.fetchedMovies = action.payload.results;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      // Add user to the state array
      console.log("it was rejected");

      state.loading = false;
    });
  },
});
// export const { movieSlice } =
//   cartSlice.actions;
export default movieSlice.reducer;
