import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export const Navbar = () => {
  return (
    <Box className="navbar">
      <Link to="./" className="logo">My Blog</Link>
      <Link to={"./admin"} className="link">Admin</Link>
      <Link to="./blog" className="link">Add Blog</Link>
      <Link to={"./myblog"} className="link"> My Blog</Link>
      <Link to={"./register"} className="link"> Register</Link>

    </Box>
  );
};
