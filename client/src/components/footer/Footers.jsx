import React from "react";
import { Typography, Link, Box } from "@mui/material";

function Footers() {
  return (
    <Box
      component="footer"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        backgroundColor: "black",
        color: "white",
        gap: "0.5rem",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
          margin: "20px",
          padding: "10px",
        }}
        id="Company"
      >
        <Typography variant="h3" component="h3">
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          cupiditate error, numquam, suscipit cumque quibusdam eum quos
          molestias officiis, odit impedit ea eaque? Pariatur saepe tempora
          aperiam corrupti provident eius error facere laboriosam impedit.
          Accusantium ipsa eum perferendis iusto iure dignissimos illum nobis
          beatae aliquid, eos saepe consectetur cum quod enim sint ad error
          animi doloribus vero ipsum incidunt molestias corporis itaque. Fugit
          nam labore optio?
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
          margin: "20px",
          padding: "10px",
        }}
        id="service"
      >
        <Typography variant="h3" component="h3">
          Explore Our Products
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
          margin: "20px",
          padding: "10px",
        }}
        id="contact"
      >
        <Typography variant="h3" component="h3">
          Contact Us
        </Typography>
        <Box
          component="ul"
          sx={{
            paddingLeft: 0,
            listStyle: "none",
            margin: 0,
          }}
        >
          <li>
            <Link href="#" color="inherit" underline="none">
              gfvjska.com
            </Link>
          </li>
          <li>
            <Link
              href="mailto:dwa@adwkhba.com"
              color="inherit"
              underline="none"
            >
              dwa@adwkhba.com
            </Link>
          </li>
          <li>
            <Typography component="p">+491 447483 35344</Typography>
          </li>
        </Box>
      </Box>
    </Box>
  );
}

export default Footers;
