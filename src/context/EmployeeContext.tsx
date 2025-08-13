import { createContext, useContext } from "react";
import type { EmployeeData } from "../App";

export const EmployeeContext = createContext<EmployeeData | null>(null);

export const useEmployee = () => {
  return useContext(EmployeeContext);
};
