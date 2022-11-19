import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../../Redux/AuthReducer/action";
export const Register = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  console.log("inputsData", inputData);
  const handleSubmit = (e) => {
    e.preventDefault();
  //   const payload = {
  //     firstName: inputData.firstName,
  //     lastName: inputData.email,
  //     email: inputData.lastName,
  //     password: inputData.password,
  //   };
    dispatch(registerAPI(inputData)).then((res) => console.log(res))
    .catch((err) => console.log(err));
  alert("Registration Successfull");
  navigate("/login");
  };
  return (
    <Box justify="center" mt={"25px"}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        w={"32%"}
        m={"auto"}
        padding="13px 20px"
        h="500px"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      >
        <form>
          <Text fontSize={"30px"} color="gray.900" m="0">
            Register
          </Text>
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            First Name
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="text"
            name="firstName"
            value={inputData.firstName}
            onChange={(e) => handleInput(e)}
            placeholder="Enter Your First Name"
          />
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Last Name
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            value={inputData.lastName}
            onChange={(e) => handleInput(e)}
          />
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Email Id
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={inputData.email}
            onChange={(e) => handleInput(e)}
          />
          <select onChange={(e)=>handleInput(e)}>
            <option vlaue="admin">Admin</option>
            <option value="user">Content Writer</option>
          </select>
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Password
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="passowrd"
            name="password"
            placeholder="Enter Your 8 digit password"
            value={inputData.password}
            onChange={(e) => handleInput(e)}
          />
          <Button
            mt="20px"
            w="300px"
            borderColor="#ccd0d5"
            colorScheme="RGBA(0, 0, 0, 0.92)"
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            transform="scale(0.98)"
            background="#000000"
            width="300px"
            _hover={{
              bg: "#f5f6f7",
              background: "gray.600",
              transform: "scale(0.98)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </form>
      </Flex>
    </Box>
  );
};