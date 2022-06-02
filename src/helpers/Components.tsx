import { ReactNode } from "react";

export const WithoutWrap = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);
export type WithoutWrapType = typeof WithoutWrap;
