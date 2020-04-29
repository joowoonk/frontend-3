import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_FAILURE = "POST_USER_FAILURE";

export const LOGOUT = "LOGOUT";

export const postLogin = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .get(`https://`)
      .then((res) => {
        dispatch({ type: FETCH_USER_SUCCESS });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_USER_FAILURE,
          payload: err,
        });
      });
  };
};

export const postUserAction = (user) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .post(`http://localhost:3333/`, user)
      .then((res) => {
        dispatch({ type: POST_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: POST_USER_FAILURE,
          payload: err,
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    console.log("LOGOUT?");
    dispatch({ type: LOGOUT });
  };
};
