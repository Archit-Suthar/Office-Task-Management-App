import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useSelector } from "react-redux";

const Navbar = () => {
  //   const { isAuthenticated } = useSelector((state) => state.user);

  const pages = ["About Us", "Contact Us", "Login"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [navbarBG, setNavbarBG] = useState("transparent");
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    if (y <= 1) setNavbarBG("transparent");
    else setNavbarBG("inherit");
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color={navbarBG}
      elevation={0}
      sx={{
        fontFamily: "monospace",
        position: "fixed",
        top: 0,
        left: 0,
        color: "primary",
        zIndex: "2",
        backgroundColor: "#F5F6FA",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              letterSpacing: ".2rem",
              color: "primary",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            {/* <AssignmentTurnedInIcon fontSize="23px" /> */}
            <Link to="/">LOGO</Link>
          </Typography>
          {/* for hamburger */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* full screen */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <AssignmentTurnedInIcon fontSize="23px" />
            <Link to="/">OTM</Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "end" },
            }}
          >
            <Button
              to="/contact"
              style={{
                margin: "1.5rem",
                letterSpacing: "0.15rem",
                // color: "white",
                marginRight: "0",
                fontWeight: "bold",
              }}
            >
              About Us
              {/* {isAuthenticated ? "MyProfile" : "Login"} */}
            </Button>
            <Button
              to="/contact"
              style={{
                margin: "1.5rem",
                letterSpacing: "0.15rem",
                // color: "white",
                marginRight: "0",
                fontWeight: "bold",
              }}
            >
              Contact Us
              {/* {isAuthenticated ? "MyProfile" : "Login"} */}
            </Button>
            <Button
              variant="contained"
              to="/login"
              style={{
                margin: "1.5rem",
                letterSpacing: "0.15rem",
                color: "white",
                marginRight: "0",
                fontWeight: "bold",
              }}
            >
              Login
              {/* {isAuthenticated ? "MyProfile" : "Login"} */}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
