import React from "react";
import "./HeaderSection.scss";
import { Box, Typography } from "@mui/material";

const heading = "Welcome to Our Website";
const para = "Your journey begins here";
const backgroundImage =
  "https://images.pexels.com/photos/2240756/pexels-photo-2240756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
function HeaderSection() {
  return (
    // <header className="header-section">
    //   <img
    //     src={backgroundImage}
    //     alt="Background"
    //     className="background-image"
    //   />
    //   <div className="image-mask">
    //     <div className="welcome-text">
    //       <h1>{heading}</h1>
    //       <p>{para}</p>
    //     </div>
    //   </div>
    // </header>
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        borderImage: `linear-gradient(135deg, rgba(25, 117, 210, 0.5) 10%, rgba(255, 156, 75, 0.5) 50%) 1 fill`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" sx={{ color: "black" }}>
        Project Selection
      </Typography>
    </Box>
  );
}

export default HeaderSection;
