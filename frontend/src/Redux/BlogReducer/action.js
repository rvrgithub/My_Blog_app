import * as types from "./actionTypes";
import axios from "axios";


export const getBlogData =(params)=>(dispatch)=>{
    // console.log("blogparams",params)
    dispatch({type:types.GET_BLOGS_REQUEST});
return axios.get("http://localhost:4500/blog",params)
.then((res)=>{
    dispatch({type:types.GET_BLOGS_SUCCESS,payload:res.data.content})
})
    .catch((err)=>dispatch({type:types.GET_BLOGS_FAILURE}))
}




export const createBlog =(params)=>(dispatch)=>{
    console.log("blog_params" , params)
    // dispatch({type:types.POST_BLOGS_REQUEST});
return axios.post("http://localhost:4500/blog/new",params)
.then((res)=>{
    dispatch({type:types.POST_BLOGS_SUCCESS,payload:console.log("ress",res)})
})
// .catch((err)=>dispatch({type:types.POST_BLOGS_FAILURE,payload:console.log("err",err)}))
}


