import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import topRatedReducer from "./features/topRatedSlice";
import popularReducer from "./features/popularSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    topRatedMovies: topRatedReducer,
    popularMovies: popularReducer,
  },
});
