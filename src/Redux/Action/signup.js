import { createAction } from "redux-actions";

export const signupAction = {
  SIGNUPREQUEST: "Signup Requested!",
  SIGNUPSUCCESS: "Signup Success!",
  SIGNUPFAILED: "Signup Failed!",
};

export const signupRequest = createAction(signupAction.SIGNUPREQUEST);
export const signupSuccess = createAction(signupAction.SIGNUPSUCCESS);
export const signupFailed = createAction(signupAction.SIGNUPFAILED);