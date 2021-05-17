import { createAction } from "redux-actions";

export const addProfileAction = {
  ADDPROFILEREQUEST: "Profile Add Requested!",
  ADDPROFILESUCCESS: "Profile Add Success!",
  ADDPROFILEFAILED: "Profile Add Failed!",
};

export const addprofileRequest = createAction(addProfileAction.ADDPROFILEREQUEST);
export const addprofileSuccess = createAction(addProfileAction.ADDPROFILESUCCESS);
export const addprofileFailed = createAction(addProfileAction.ADDPROFILEFAILED);