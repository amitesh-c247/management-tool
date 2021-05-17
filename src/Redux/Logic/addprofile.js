import { createLogic } from "redux-logic";
import {ApiHelper} from "../../Helper/apiHelper";
import {ApiRoutes} from "../../apiroutes"
import {
  addProfileAction,
  redirectTo,
} from "../Action";
import { Toaster } from "../../Components/Common/toast";

let api = new ApiHelper();
/**
 *
 */
const addprofileLogic = createLogic({
  type: addProfileAction.ADDPROFILEREQUEST,
  async process({ action }, dispatch, done) {
    try {
      const { firstName,email } = action.payload
      if (firstName !== "" && email !== "" ) {
        const result = await api.FetchFromServer(
            ApiRoutes.ADDPROFILE.url,
            ApiRoutes.ADDPROFILE.method,
            undefined,
            undefined,
            action.payload
       );
        if (result) {
          Toaster({ type: 'success', message: 'Profile added successfully' })
          dispatch(redirectTo({ path: "/dashboard" }));
          done();
        } else {
          Toaster({ type: 'Erro', message: 'Error In proifle create' })
          done();
        }
       }
      else {
        Toaster({ type: 'error', message: 'Error in Signed in' })
       }
      done();
        // done();
    } catch (error) {
      console.log("=================");
      console.log(error);
      console.log("=================");
      Toaster("error", error)
    }
  }
});


export const AddProfileLogics = [
    addprofileLogic,
];