import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import { Box, Grid, Typography } from "@mui/material";

const MovieListing = () => {
   const movies = useSelector(getAllMovies);
   const shows = useSelector(getAllShows);
   let renderMovies,
      renderShows = "";
   renderMovies =
      movies.Response === "True" ? (
         movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
         })
      ) : (
         <Box>
            <Typography>{movies.Error}</Typography>
         </Box>
      );

   renderShows =
      shows.Response === "True" ? (
         shows.Search.map((shows, index) => {
            return <MovieCard key={index} data={shows} />;
         })
      ) : (
         <Box>
            <Typography>{movies.Error}</Typography>
         </Box>
      );

   return (
      <Box>
         <Typography p={2} variant="h4" component="h4" gutterBottom>
            Movies
         </Typography>
         <Grid
            container
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
         >
            {renderMovies}
         </Grid>
         <Typography p={2} variant="h4" component="h4" gutterBottom>
            Shows
         </Typography>
         <Grid
            container
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
         >
            {renderShows}
         </Grid>
      </Box>
   );
};

export default MovieListing;
