import { React, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
   fetchAsyncMovies,
   fetchAsyncShows,
} from "../features/movies/movieSlice";

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
}));

export default function PrimarySearchAppBar() {
   const [searchTerm, setSearchTerm] = useState("");
   const dispatch = useDispatch();

   const submitHandler = (e) => {
      e.preventDefault();
      if (!searchTerm.trim()) {
         alert("Please enter a Movie name");
      } else {
         dispatch(fetchAsyncMovies(searchTerm));
         dispatch(fetchAsyncShows(searchTerm));
         setSearchTerm("");
      }
   };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{ textDecoration: "none", color: "white" }}
               >
                  Movie App
               </Typography>
               <form onSubmit={submitHandler}>
                  <Search>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                     />
                  </Search>
               </form>
               <Box sx={{ flexGrow: 1 }} />
               <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton size="large" color="inherit">
                     <MailIcon />
                  </IconButton>
                  <IconButton size="large" color="inherit">
                     <NotificationsIcon />
                  </IconButton>
                  <IconButton
                     size="large"
                     edge="end"
                     aria-label="account of current user"
                     color="inherit"
                  >
                     <AccountCircle />
                  </IconButton>
               </Box>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
