import * as types from "./actionTypes";
import axios from "axios";


const getBlogData =(params)=>(dispatch)=>{
    dispatch({type:types.GET_BLOGS_REQUEST});
return axios.get("http://localhost:4500/blog",params)
.then((res)=>{
    dispatch({type:types.GET_BLOGS_SUCCESS,payload:res.data.content})
})
    .catch((err)=>dispatch({type:types.GET_BLOGS_FAILURE}))
}

export default getBlogData;

