import * as types from "./actionType";
import axios from "axios";
// export const  loginApi =(payload) =>(dispatch)=>{
//     dispatch({type:types.USER_LOGIN_REQUEST})
//    return axios
//     .post("http://localhost:4500/login",{
//         method:"Post",
//         data:payload,
//     })
//     .then((r)=>dispatch({type:types.USER_LOGIN_SUCCESS, payload:console.log("res",r)}))
//     .catch((e)=>dispatch({type:types.USER_LOGIN_FAILURE}))
    
// }





export const registerAPI = (params) => (dispatch) => {
    console.log("param",params)
  return axios
    .post("http://localhost:4500/register", params)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER});
    });
};

export const loginApi = (params) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:4500/login", params)
    .then((res) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.token });
      return types.USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
      return types.USER_LOGIN_FAILURE
    });
};

// // export const logoutAPI = () => (dispatch) => {
// //   localStorage.clear();
// //   dispatch({ type: types.USER_LOGOUT });
// //   return true;
// // };
