import { createAction } from "redux-actions";

export const loginAction = {
  LOGIN_REQUEST: "Login Requested!",
  LOGIN_SUCCESS: "Login Success!",
  LOGIN_FAILED: "Login Failed!",
  LOGOUT_REQUEST: "Logout Started!",
  LOGOUT_SUCCESS: "Logout Success!",
};

export const loginRequest = createAction(loginAction.LOGIN_REQUEST);
export const loginSuccess = createAction(loginAction.LOGIN_SUCCESS);

export const logoutRequest = createAction(loginAction.LOGOUT_REQUEST);
export const logoutSuccess = createAction(loginAction.LOGOUT_SUCCESS);

export const loginFailed = createAction(loginAction.LOGIN_FAILED);
