import { combineReducers } from "redux";
import { songsReducer } from "./songs";
import { userReducer } from "./users";

export default combineReducers({
  songsReducer,
  userReducer,
});
