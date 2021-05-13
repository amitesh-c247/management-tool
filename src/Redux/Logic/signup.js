import { createLogic } from "redux-logic";
import {ApiHelper} from "../../Helper/apiHelper";
import {ApiRoutes} from "../../apiroutes"
import {
  signupAction,
  redirectTo,
} from "../Action";
import { Toaster } from "../../Components/Common/toast";

let api = new ApiHelper();
/**
 *
 */
const signupLogic = createLogic({
  type: signupAction.SIGNUPREQUEST,
  async process({ action }, dispatch, done) {
    try {
      const { user_name, email, password } = action.payload
      if (email !== "" && password !== "" && user_name !== "") {
        const result = await api.FetchFromServer(
            ApiRoutes.SIGNUP.url,
            ApiRoutes.SIGNUP.method,
            undefined,
            undefined,
            action.payload
       );
        if (result) {
          localStorage.setItem('token', result.data.bearer);
          dispatch(redirectTo({ path: "/dashboard" }));
          Toaster({ type: 'success', message: 'Signed in successfully' })
          done();
        } else {
          Toaster({ type: 'Erro', message: 'Error In signed in' })
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


export const SignupLogics = [
    signupLogic,
];