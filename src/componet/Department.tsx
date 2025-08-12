import type { EmployeeData } from "../App";
import { Team } from "./Team";

type DepartmentProps = {
  employee: EmployeeData;
};
export const Department = ({ employee }: DepartmentProps) => {
  return (
    <>
      <h2>Department: {employee.department}</h2>
      <Team employee={employee} />
    </>
  );
};
