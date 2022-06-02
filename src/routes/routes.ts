import { Login } from "../pages/Login/Login";
import { ManyInputsWrappers } from "../pages/ManyInputsWrappers/ManyInputsWrappers";
import { ManySingleInputs } from "../pages/ManySingleInputs/ManySingleInputs";
import { Mixed } from "../pages/Mixed/Mixed";

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
    path: "/ManyInputsWrappers",
    component: ManyInputsWrappers,
  },
  {
    path: "/ManySingleInputs",
    component: ManySingleInputs,
  },
];

export type RoutesType = typeof routes;
