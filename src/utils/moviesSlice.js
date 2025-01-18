import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null, // Add this state to store popular movies
    trailerMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload; 
    },

    addTrailerVideo: (state, action)=>{
      state.trailerVideo = action.payload;
    },

    addTopRatedMovies: (state, action)=>{
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action)=>{
      state.upcomingMovies = action.payload;
    }
    

  },
});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies,addTopRatedMovies} =
  moviesSlice.actions;


export default moviesSlice.reducer;