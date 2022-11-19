import { Box, Button, Input, Textarea } from "@chakra-ui/react";
// import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../Redux/BlogReducer/action";
import "./style.css";
export const CreateBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("blogss", blog);
    dispatch(createBlog(blog))
      .then((res) => console.log("resmain", res))
      .catch((err) => console.log("err", err));
    navigate("/");
  };
  // console.log("blog", blog);
  return (
    <Box className="blog_container">
      <h2>Create Your Blog 👍</h2>
      <form className="form">
        <Input
          type={"text"}
          placeholder="Enter Your Title"
          name="title"
          value={blog.title}
          onChange={(e) => handleChange(e)}
        />
        <Textarea
          type="text"
          placeholder="Enter Your Description atleast 100 words"
          name="description"
          value={blog.description}
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="text"
          name="image"
          placeholder="Past Your URL"
          value={blog.image}
          onChange={(e) => handleChange(e)}
        />
        <Button
          mt="20px"
          w="100%"
          borderColor="#ccd0d5"
          colorScheme="RGBA(0, 0, 0, 0.92)"
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          transform="scale(0.98)"
          background="#000000"
          width="100%"
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
    </Box>
  );
};
