import * as types from "./actionType";
import axios from "axios";
// https://recoveroio.herokuapp.com/http:/
export const registerAPI = (params) => (dispatch) => {
  console.log("params",params);
  return axios
    .post("http://localhost:4500/register", params)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER,payload:localStorage.setItem("user_Id",JSON.stringify(res.data.user))});
    });
};
// https://recoveroio.herokuapp.com
export const loginApi = (params) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:4500/login", params)
    .then((res) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload:res.data });
      return types.USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
      return types.USER_LOGIN_FAILURE
    });
};

