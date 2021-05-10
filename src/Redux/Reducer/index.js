import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { routerReducer } from "react-router-redux";
import {blogInfoReducer} from "./blogList"
import {moviesInfoReducer} from "./moviesList"

export const mainReducer = handleActions(
  {
    SHOW_LOADER: (state, action) => ({
      showLoader: true
    }),
    HIDE_LOADER: (state, action) => ({
      showLoader: false
    })
  },
  {
    showLoader: false
  }
);
/**
 *
 */
const AppReducer = combineReducers({
  mainReducer,
  blogInfoReducer,
  moviesInfoReducer,
  routing: routerReducer
});

export default AppReducer;
