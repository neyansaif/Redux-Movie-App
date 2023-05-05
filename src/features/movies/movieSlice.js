import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";
import { APIKey } from "../../api/key";

//Middleware Thunk
//Async Action Creator
//Movies
export const fetchAsyncMovies = createAsyncThunk(
   "movies/fetchAsyncMovies",
   async (searchTerm) => {
      const response = await movieApi.get(
         `?apiKey=${APIKey}&s=${searchTerm}&type=movie`
      );

      return response.data;
   }
);

//Shows
export const fetchAsyncShows = createAsyncThunk(
   "movies/fetchAsyncShows",
   async (searchTerm) => {
      const response = await movieApi.get(
         `?apiKey=${APIKey}&s=${searchTerm}&type=series`
      );

      return response.data;
   }
);

//MovieOrShowDetails
export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
   "movies/fetchAsyncMovieOrShowDetails",
   async (id) => {
      const response = await movieApi.get(
         `?apiKey=${APIKey}&i=${id}&Plot=full`
      );

      return response.data;
   }
);

//Sync Action Creator
const initialState = {
   movies: {},
   shows: {},
   movieOrShowDetails: {},
};
const movieSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {
      // addMovies: (state, { payload }) => {
      //    state.movies = payload;
      // },
      removeMovieOrShowDetails: (state) => {
         state.movieOrShowDetails = {};
      },
   },

   extraReducers: {
      [fetchAsyncMovies.pending]: () => {
         console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
         console.log("Fetched Sucessfully");
         return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
         console.log("Rejected");
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
         console.log("Fetched Sucessfully");
         return { ...state, shows: payload };
      },
      [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
         console.log("Fetched Sucessfully");
         return { ...state, movieOrShowDetails: payload };
      },
   },
});

export const { removeMovieOrShowDetails } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export const getAllShows = (state) => state.movies.shows;

export const getmovieOrShowDetails = (state) => state.movies.movieOrShowDetails;

export default movieSlice.reducer;
