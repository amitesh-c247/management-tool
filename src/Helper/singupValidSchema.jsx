//import { object, string } from "yup";
import * as yup from 'yup';
const loginFormSchema = yup.object().shape({
    user_name:yup.string().required("User Name is required."),
    email: yup.string().required("email is required").email("Valid email is required"),
    password: yup.string().required("Password is required")
});

export default loginFormSchema