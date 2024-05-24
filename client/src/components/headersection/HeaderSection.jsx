import React from "react";
import "./HeaderSection.scss";
import { Box } from "@mui/material";

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
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        width: "100vw",
      }}
    ></Box>
  );
}

export default HeaderSection;
