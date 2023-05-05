import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import MovieListing from "../components/MovieListing";

import {
   fetchAsyncMovies,
   fetchAsyncShows,
} from "../features/movies/movieSlice";

export default function Home() {
   const dispatch = useDispatch();
   const movietext = "Harry";
   const showtext = "Friends";
   useEffect(() => {
      dispatch(fetchAsyncMovies(movietext));
      dispatch(fetchAsyncShows(showtext));
   }, [dispatch]);

   return (
      <Box>
         <MovieListing />
      </Box>
   );
}
