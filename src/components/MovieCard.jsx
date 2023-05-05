import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
   const { data } = props;
   return (
      <>
         <Card sx={{ maxWidth: 220 }} style={{ margin: "10px" }}>
            <Link
               to={`/movie/${data.imdbID}`}
               component="button"
               style={{ textDecoration: "none", color: "black" }}
            >
               <CardActionArea>
                  <CardMedia
                     component="img"
                     height="250"
                     image={data.Poster}
                     alt={data.Title}
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h7" component="div">
                        {data.Title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {data.Year}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Link>
         </Card>
      </>
   );
};

export default MovieCard;
