import { DefaultValues } from "../pages/DefaultValues/DefaultValues";
import { Login } from "../pages/Login/Login";
import { ManyInputsWrappers } from "../pages/ManyInputsWrappers/ManyInputsWrappers";
import { ManySingleInputs } from "../pages/ManySingleInputs/ManySingleInputs";
import { Mixed } from "../pages/Mixed/Mixed";
import { Validation } from "../pages/Validation/Validation";

export const routes = [
  {
    path: "/",
    component: Mixed,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/DefaultValues",
    component: DefaultValues,
  },
  {
    path: "/Validation",
    component: Validation,
  },
  {
    path: "/ManyInputsWrappers",
    component: ManyInputsWrappers,
  },
  {
    path: "/ManySingleInputs",
    component: ManySingleInputs,
  },
];

export type RoutesType = typeof routes;
