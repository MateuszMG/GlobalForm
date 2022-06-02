import * as Yup from "yup";

export const userSchema = {
  firstname: Yup.string()
    .required("First name is required")
    .trim("Username cannot contain leading and trailing spaces")
    .strict(true)
    .min(2, "Username must be at least 2 characters long")
    .max(40, "Username cannot exceed 40 characters"),

  lastname: Yup.string()
    .required("Last name is required")
    .trim("Username cannot contain leading and trailing spaces")
    .strict(true)
    .min(2, "Username must be at least 2 characters long")
    .max(40, "Username cannot exceed 40 characters"),

  email: Yup.string()
    .required("Email is required")
    .lowercase("Only lowercase letters")
    .max(72, "Email cannot exceed 72 characters")
    .email("Invalid email"),

  password: Yup.string()
    .required("Password is required")
    .trim("Password cannot contain leading and trailing spaces")
    .strict(true)
    .min(6, "Password must be at least 6 characters long")
    .max(72, "Password cannot exceed 72 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[#$!.%& *?])[A-Za-z\d#$!.%& *?]{6,72}$/,
      "Password must contain, one uppercase, one number and one special case character: # $ ! . % & * ? "
    ),

  repeatPassword: Yup.string()
    .required("Repeat password is required")
    .oneOf([Yup.ref("password"), null], "Passwords don't match."),

  repeatNewPassword: Yup.string()
    .required("Repeat new password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords don't match."),
};
