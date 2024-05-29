import React from "react";
import { Box, Button, CardContent, Paper, Typography } from "@mui/material";

const ProblemCards = ({ id, title, description }) => {
  return (
    <Paper elevation={2} sx={{ maxWidth: 345, m: 2, p: 2, color: "black" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ID:{id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          NAME:{title}
        </Typography>
        <Typography variant="body2" color="black">
          DESC:{description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("Clicked");
            }}
          >
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default ProblemCards;
