//import { object, string } from "yup";
import * as yup from 'yup';
const loginFormSchema = yup.object().shape({
    user_name:yup.string().required("User Name is required."),
    email: yup.string().required("email is required").email("Valid email is required"),
    password: yup.string().required("Password is required")
});

export default loginFormSchema

export const profileFormSchema = yup.object().shape({
    firstName:yup.string().required("First Name is required."),
    email: yup.string().required("email is required").email("Valid email is required"),
    contact_number:yup.number("Please enter numeric vaues.").required("Contact number is required."),
    address:yup.string().required("Address is required"),
});

