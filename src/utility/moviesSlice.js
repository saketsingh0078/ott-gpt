import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
