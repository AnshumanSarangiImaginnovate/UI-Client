import React, { cloneElement, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types"; // npm i prop-types
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrandLogo from "/tkh.png";
import { UserAvatarDropdown } from "./UserAvatarDropdown";
import { useTheme } from "@emotion/react";
import { SearchBar } from "./SearchBar";
import { Sidebar } from "./Sidebar";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const theme = useTheme();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [elevation, setElevation] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setIsLoggedIn(!!userData);
  }, []);

  const handleScroll = () => {
    setElevation(window.scrollY > 0 ? 4 : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close drawer when location changes
    setDrawerOpen(false);
  }, [location]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll elevation={elevation} {...props}>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: elevation ? "white" : "white",
            // backgroundColor: "inherit",
            // backdropFilter: "blur(15px)",
            px: "1.875rem",
            py: "0.625rem",
            top: 0,
            zIndex: 100,
            transition: "all 0.1s ease",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                transition: "all 0.3s ease",
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerOpen}
                color="#fff"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <img
                loading="lazy"
                src={BrandLogo}
                alt="brand logo"
                style={{
                  width: "4rem",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              component={NavLink}
              to={"/"}
              variant="h4"
              noWrap
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                color: theme.palette.primary.main,
                cursor: "pointer",
                margin: "0 1%",
                textDecoration: "none",
              }}
            >
              The Knowhub
            </Typography>
            {/* <Box sx={{ maxWidth: 350, width: "100%", ml: 2 }}>
              {isLoggedIn ? <SearchBar /> : null}
            </Box> */}
            <Box sx={{ flexGrow: 0, position: "absolute", right: 0 }}>
              {isLoggedIn ? (
                <UserAvatarDropdown isLoggedIn />
              ) : (
                <Box sx={{ gap: 2 }}>
                  <Button
                    component={NavLink}
                    to={"/login"}
                    variant="contained"
                    sx={{
                      marginX: 0.5,
                      color: "#FFF",
                      fontWeight: 700,
                      borderRadius: "15px",
                      textTransform: "none",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={NavLink}
                    to={"/signup"}
                    variant="contained"
                    sx={{
                      marginX: 0.5,
                      color: "#FFF",
                      fontWeight: 700,
                      borderRadius: "15px",
                      textTransform: "none",
                      textDecoration: "none",
                    }}
                  >
                    Signup
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Sidebar drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose} />
    </React.Fragment>
  );
}

export { Header };

{
  /* <LoadingButton
              loading={isLoading}
              variant="contained"
              color="primary"
              sx={{ mt: 3, py: 1.5, px: 5 }}
              onClick={startQuiz}
            >
              Start Quiz
            </LoadingButton> */
}
