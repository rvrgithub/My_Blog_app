import * as types from "./actionTypes";
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
//   console.log("action",action)
  // console.log("payload",payload)
  switch (type) {
    case types.GET_BLOGS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_BLOGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
