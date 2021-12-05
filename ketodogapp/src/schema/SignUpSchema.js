import * as yup from "yup";

export default yup.object().shape({
    
    username: yup
      .string()
      .required("Username is required")
      .min(6, "username must be at least 6 characters"),
  
    password: yup
      .string()
      .required("Valid Passwordr is required"),
  
    email: yup
      .string()
      .required("email is required")
  
  
  });