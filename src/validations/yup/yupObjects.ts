import * as Yup from "yup";
import { userSchema } from "./userSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const {
  email,
  password,
  repeatNewPassword,
  repeatPassword,
  firstname,
  lastname,
} = userSchema;

export const yupObjects = {
  login: Yup.object().shape({
    email,
    password,
  }),

  register: Yup.object().shape({
    firstname,
    lastname,
    email,
    password,
    repeatPassword,
  }),

  forgotPassword: Yup.object().shape({
    email,
  }),

  confirmPassword: Yup.object().shape({
    password,
  }),

  changePassword: Yup.object().shape({
    oldPassword: password,
    newPassword: password,
    repeatNewPassword: repeatNewPassword,
  }),
};

export const getResolver = (key: keyof typeof yupObjects) =>
  yupResolver(yupObjects[key]);
