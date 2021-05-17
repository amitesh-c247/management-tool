import { createLogic } from "redux-logic";
import { push } from "react-router-redux";

import { SignupLogics } from "./signup";
import { LoginLogics } from "./login";
import {AddProfileLogics} from "./addprofile"

/* Logic action for redirecting to path of routes */
export const redirectToLogic = createLogic({
  type: "REDIRET_TO",
  async process({ action }, dispatch, done) {
    dispatch(push(action.payload.path));
    done();
  },
});

export default [...LoginLogics, ...SignupLogics, ...AddProfileLogics, redirectToLogic];
