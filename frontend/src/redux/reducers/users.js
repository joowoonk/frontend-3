// import actionTypes from "../actionTypes";

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  LOGOUT,
  FETCH_USER_FAILURE,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from "../actions/userAction";
const initialState = {
  user: "",
  error: "",
  chosen: false,
  loading: false,
  // addingSong: [
  //   {
  //     id: "",
  //   },
  // ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
      };
    // case FETCH_USER_SUCCESS:
    //   return {
    //     ...state,
    //     song: [...action.payload],
    //     error: "",
    //   };
    // case FETCH_USER_FAILURE:
    //   return {
    //     ...state,
    //     err: action.payload,
    //   };
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: [action.payload],
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      console.log("WORKING!");
      localStorage.clear();
      window.location.href = "/";
      return {
        loading: false,
      };
    default:
      return state;
  }
};
