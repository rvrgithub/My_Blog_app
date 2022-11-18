import { Box, Card } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { Cards } from '../../Components/Card/Cards';
import getBlogData from '../../Redux/BlogReducer/action';
import "./home.css"
export const Home = () => {
  const [blogData,setBlogData] = useState({});
  const dispatch = useDispatch();
  const blogs = useSelector((store)=>store.BlogReducer.blogs);
  console.log("blog",blogs);
  useEffect(()=>{
    // if(blogs?.lenght ===0){
      dispatch(getBlogData());
    // }
  },[]);
  return (
    <Box className='home_container'>
{blogs.map((e,index)=>(
  <Cards blog={e} key={index}/>
))}
    </Box>
  )
}
