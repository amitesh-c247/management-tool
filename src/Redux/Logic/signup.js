import { createLogic } from "redux-logic";
import {ApiHelper} from "../../Helper/apiHelper";
import {ApiRoutes} from "../../apiroutes"
import {
  signupAction,
  redirectTo,
} from "../Action";
import { Toaster } from "../../Components/Common/toast";


let tokenNumber = Math.random().toString(36).substr(2);
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
        const storageData = {
          "token": tokenNumber, user_name, email, password
        }
        localStorage.setItem("data", JSON.stringify(storageData));

        Toaster({ type: 'success', message: 'Signed in successfully' })
        dispatch(redirectTo({ path: "/dashboard" }));
      }
      else {
        Toaster({ type: 'error', message: 'Error in Signed in' })
      }
      done();
        // let api = new ApiHelper();
        // let result = await api.FetchFromServer(
        // ApiRoutes.SIGNUP.url,
        // "GET",
        // false,
        // undefined,
        // undefined
        // )
        // if(result && result.data){
        // const movies = [];
        // movies.push(result.data);
        // dispatch(moviesSuccess(movies));
        // }
        // else{
        //     console.log(result);
        // }
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