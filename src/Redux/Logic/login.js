import { createLogic } from "redux-logic";
import {
  loginAction,
  redirectTo,
} from "../Action";
import { Toaster } from "../../Components/Common/toast";

const loginDetails = {
  email: "rohit.chapter247@gmail.com",
  password: "123456",
  token: ""
}

let tokenNumber = Math.random().toString(36).substr(2);
/**
 *
 */
const loginLogic = createLogic({
  type: loginAction.LOGIN_REQUEST,
  async process({ action }, dispatch, done) {
    try {
      const { email, password } = action.payload
      if (email !== "" && password !== "" && email === loginDetails.email) {
        const storageData = {
          "token": tokenNumber, "email": loginDetails.email, "firstName": "Rohit", "lastName": "Taur", "address": "Indore", "dob": "15-04-1990"
        }
        localStorage.setItem("data", JSON.stringify(storageData));

        Toaster({ type: 'success', message: 'Signed in successfully' })
        dispatch(redirectTo({ path: "/dashboard" }));
      }
      else {
        Toaster({ type: 'error', message: 'Error in Signed in' })
      }
      done();
    } catch (error) {
      console.log("=================");
      console.log(error);
      console.log("=================");
      Toaster("error", error)
    }
  }
});


export const LoginLogics = [
  loginLogic,
];