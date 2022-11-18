import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export const Navbar = () => {
  return (
    <Box className="navbar">
      <Link to="./" className="logo">My Blog</Link>
      <Link to={"./admin"}>Admin</Link>
      <Link to="./blog">Create Your Blog</Link>
      <Link to={"./register"}> Register</Link>
      
    </Box>
  );
};
