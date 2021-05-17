import { createAction } from "redux-actions";

export * from "./login";
export * from "./signup";
export * from "./addprofile"
//
export const redirectTo = createAction("REDIRET_TO");
//
export const showLoader = createAction("SHOW_LOADER");
export const hideLoader = createAction("HIDE_LOADER");
