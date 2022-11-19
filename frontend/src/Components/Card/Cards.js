import { Box, Button, Flex, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import "./style.css";
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import { DeleteIcon } from "@chakra-ui/icons";
export const Cards = ({ blog }) => {
  // console.log("key")
  const handleDelete =(e)=>{
console.log("e",e)
  }
  // console.log("cardBlog", blog.title);
  return (
<Card className="blog_card">
  <CardBody>
  <Flex textAlign={"left"}>  <Button className="btn" onClick={(e)=>handleDelete(e)}><DeleteIcon/></Button> </Flex>
    <Stack divider={<StackDivider />} spacing='4'>
    <Box>
      <Image src={blog.image} alt={"image_error"}></Image>
    </Box>
      <Box>
      <CardHeader>
    <Heading size='md'>{blog.title}</Heading>
  </CardHeader>
        <Text pt='2' fontSize='sm'>
        {blog.description}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  );
};
