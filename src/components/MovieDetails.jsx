import React, { useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRateIcon from "@mui/icons-material/StarRate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
   fetchAsyncMovieOrShowDetails,
   getmovieOrShowDetails,
   removeMovieOrShowDetails,
} from "../features/movies/movieSlice";

const Img = styled("img")({
   margin: "auto",
   display: "block",
   maxWidth: "100%",
   maxHeight: "100%",
});

const MovieDetails = () => {
   const { imdbID } = useParams();
   const dispatch = useDispatch();
   const data = useSelector(getmovieOrShowDetails);
   useEffect(() => {
      dispatch(fetchAsyncMovieOrShowDetails(imdbID));
      return () => {
         dispatch(removeMovieOrShowDetails());
      };
   }, [dispatch, imdbID]);
   console.log(data);
   return (
      <Paper
         sx={{
            p: 4,
            margin: "50px",
            fullwidth: "100%",
            flexGrow: 1,
            backgroundColor: (theme) =>
               theme.palette.mode === "dark" ? "#1A2027" : "#fff",
         }}
      >
         {Object.keys(data).length === 0 ? (
            "Loading..."
         ) : (
            <Grid container spacing={6}>
               <Grid item>
                  <Img alt="complex" src={data.Poster} />
               </Grid>
               <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                     <Grid item xs p={2}>
                        <Typography variant="h6" component="div">
                           {data.Title}
                        </Typography>
                        <Typography
                           variant="body1"
                           component="div"
                           gutterBottom
                        >
                           <StarRateIcon fontSize="small" color="error" />{" "}
                           {data.imdbRating}
                        </Typography>
                        <Typography
                           variant="body1"
                           component="div"
                           gutterBottom
                        >
                           <ThumbUpIcon fontSize="small" color="primary" />{" "}
                           {data.imdbVotes}
                        </Typography>
                        <Typography
                           variant="body1"
                           component="div"
                           gutterBottom
                        >
                           <AccessTimeIcon fontSize="small" color="error" />{" "}
                           {data.Runtime}
                        </Typography>
                        <Typography
                           variant="body1"
                           component="div"
                           gutterBottom
                        >
                           <CalendarMonthIcon
                              fontSize="small"
                              color="secondary"
                           />{" "}
                           {data.Year}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                           {data.Plot}
                        </Typography>
                        <Typography variant="h6">Director:</Typography>
                        {data.Director}
                        <Typography variant="h6">Writer:</Typography>
                        {data.Writer}
                        <Typography variant="h6">Stars:</Typography>
                        {data.Actors}
                        <Typography variant="h6">Genres:</Typography>
                        {data.Genre}
                        <Typography variant="h6">Language:</Typography>
                        {data.Language}
                        <Typography variant="h6">Awards:</Typography>
                        {data.Awards}
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         )}
      </Paper>
   );
};

export default MovieDetails;
