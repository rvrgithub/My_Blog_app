import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./style.css"
export const Cards = ({ blog }) => {
  console.log("cardBlog", blog.title);
  return (
    <Box className="blog_card">
      <Image src={blog.image} alt={"image_error"} />
      <Box>
        <Text>{blog.title}</Text>
        <Text>{blog.description}</Text>
      </Box>
    </Box>
  );
};
