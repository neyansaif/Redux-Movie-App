import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Footer() {
   return (
      <Paper component="footer" square variant="outlined">
         <Box
            sx={{
               flexGrow: 1,
               justifyContent: "center",
               display: "flex",
            }}
         >
            <Typography variant="h6" color="initial">
               Movie App
            </Typography>
         </Box>

         <Container maxWidth="lg">
            <Box
               sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: "flex",
                  mb: 2,
               }}
            >
               <Typography variant="caption" color="initial">
                  Copyright ©2022.Movie,Pk Limited
               </Typography>
            </Box>
         </Container>
      </Paper>
   );
}
