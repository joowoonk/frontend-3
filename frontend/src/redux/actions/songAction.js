import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const FETCH_SONG_START = "FETCH_SONG_START";
export const FETCH_SONG_SUCCESS = "FETCH_SONG_SUCCESS";
export const FETCH_SONG_FAILURE = "FETCH_SONG_FAILURE";
export const CHOOSE_SONG_SUCCESS = "CHOOSE_SONG_SUCCESS";
export const CHOOSE_SONG_FAILURE = "CHOOSE_SONG_FAILURE";

export const songAction = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .get(`/songs/list`)
      .then((res) => {
        dispatch({ type: FETCH_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SONG_FAILURE,
          payload: err,
        });
      });
  };
};

export const postSongAction = (song) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .post(`/songs/liked`, song)
      .then((res) => {
        dispatch({ type: CHOOSE_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: CHOOSE_SONG_FAILURE,
          payload: err,
        });
      });
  };
};
