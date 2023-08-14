import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/gtr.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: "#222" }}>
        <Toolbar>
          <Link to={"/"} >
          <Box display={"flex"}>
            <img className="logo" src={Logo} alt="Logo" />
            <Typography variant="h3">SIMON'S GUITARS</Typography>
          </Box>
          </Link>
          <Box sx={{ marginLeft: "auto" }}>
            <Button color="inherit" sx={{ m: 2 }}>
              Home
            </Button>
            <Button color="inherit" sx={{ m: 2 }}>
              Guitarras
            </Button>
            <Button color="inherit" sx={{ m: 2 }}>
              Bajos
            </Button>
            <Button color="inherit" sx={{ m: 2 }}>
              <CartWidget />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
