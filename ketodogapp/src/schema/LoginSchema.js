import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(6, "username must be at least 6 characters"),

  password: yup
    .string()
    .required("Valid Passwordr is required")
    .min(
      10,
      "password should be at least a mix of ten characters, symbols and numbers"
    ),
});
