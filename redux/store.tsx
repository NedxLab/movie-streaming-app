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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
