import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/gtr.png";
import { Link, NavLink, useParams } from "react-router-dom";
import { getCategory } from "../../productos/productos";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { tipo } = useParams();
  console.log(tipo);
  console.log(item);


  useEffect(() => {
    getCategory(tipo)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [tipo]);

  if (isLoading) return <Loading/>;


  return (
    <>
      <AppBar position="static" sx={{ background: "#222" }}>
        <Toolbar>
          <Link to={"/"}>
            <Box display={"flex"} alignItems={"center"}>
              <img className="logo" src={Logo} alt="Logo" />
              <Typography variant="h3">SIMON'S GUITARS</Typography>
            </Box>
          </Link>
          <Box sx={{ marginLeft: "auto" }}>
            <NavLink to={"/"}>
              <Button color="inherit" sx={{ m: 2 }}>
                Home
              </Button>
            </NavLink>
            <NavLink to={`category/${tipo}`}>
              <Button color="inherit" sx={{ m: 2 }}>
                Guitarras
              </Button>
            </NavLink>
            <NavLink to={`category/${tipo}`}>
              <Button color="inherit" sx={{ m: 2 }}>
                Bajos
              </Button>
            </NavLink>
            <NavLink>
              <Button color="inherit" sx={{ m: 2 }}>
                <CartWidget />
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
