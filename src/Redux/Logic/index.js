import { createLogic } from "redux-logic";
import { push } from "react-router-redux";

import { SignupLogics } from "./signup";
import { LoginLogics } from "./login";
import { BlogLogics } from "./blog";
import { MoviesLogics } from "./movies";


/* Logic action for redirecting to path of routes */
export const redirectToLogic = createLogic({
  type: "REDIRET_TO",
  async process({ action }, dispatch, done) {
    dispatch(push(action.payload.path));
    done();
  }
});

export default [
  ...LoginLogics,
  ...SignupLogics,
  ...BlogLogics,
  ...MoviesLogics,
  redirectToLogic
];