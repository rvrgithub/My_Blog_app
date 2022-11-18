import { Box, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import "./style.css"
export const CreateBlog = () => {
const [blog,setBlog] = useState({
  title:"",
  description:"",
  image:"",
});
const handleChange = (e)=>{
  const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
}
const handleSubmit=(e)=>{
e.preventDefault();
console.log("blogsssss",blog)
}
console.log("blog",blog)
  return (
    <Box className='blog_container'>
    <h2>Create Your Blog 👍</h2>
    <form className='form'>
        <Input type={"text"} placeholder="Enter Your Title" name="title" value={blog.title} onChange={(e)=>handleChange(e)}/>
        <Textarea type="text" placeholder='Enter Your Description' name="description" value={blog.description} onChange={(e)=>handleChange(e)}/>
        <Input type="file"  name="image" value={blog.image} onChange={(e)=>handleChange(e)}/>
        <Input type="submit" value={"submit"} onClick={handleSubmit}/>
    </form>
    </Box>
  )
}
