import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./style.css";
export const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem("user_Id"));
  // console.log("getdata_fromLolcall", userData.firstName);
  const navigate = useNavigate();
  const logOutFunc = () => {
    localStorage.clear();
    navigate("./register");
  };
  return (
    <Box className="navbar">
      <Link to="./" className="logo">
        My Blog
      </Link>
      <Link to={"./admin"} className="link">
        Admin
      </Link>
      <Link to="./blog" className="link">
        Add Blog
      </Link>
      <Link to={"./myblog"} className="link">
        {" "}
        My Blog
      </Link>
      {localStorage.getItem("user_Id") ? (
        <>
          <Link to={"./register"} className="link" onClick={logOutFunc}>
            {" "}
            LogOut
          </Link>
          <Text className="text">
            {userData && userData.firstName.toUpperCase()}
          </Text>
        </>
      ) : (
        <>
          <Link to={"./register"} className="link">
            {" "}
            Register
          </Link>
          <Link to={"./login"} className="link">
            {" "}
            Login
          </Link>
        </>
      )}
    </Box>
  );
};
