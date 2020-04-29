// import actionTypes from "../actionTypes";

import {
  FETCH_SONG_START,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE,
  CHOOSE_SONG_SUCCESS,
  CHOOSE_SONG_FAILURE,
} from "../actions/songAction";

const initialState = {
  song: [],
  error: "",
  chosen: false,
  addingSong: { song: [{ id: "" }] },
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONG_START:
      return {
        ...state,
      };
    case FETCH_SONG_SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        song: action.payload,
        error: "",
      };
    case FETCH_SONG_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case CHOOSE_SONG_SUCCESS:
      return {
        ...state,
        // song: action.payload,
        // chosen: !state.chosen,
        addingSong: { song: [action.payload] },
        error: "",
      };
    case CHOOSE_SONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    // case "POST_SONG_SUCCESS":
    //   return {
    //     ...state,
    //     addingSong: [action.payload],
    //   };
    // case "POST_SONG_FAILURE":
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
