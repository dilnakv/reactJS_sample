import type { EmployeeData } from "../App";
import { Team } from "./Team";

type DepartmentProps = {
  employee: EmployeeData;
};
export const Department = (props: DepartmentProps) => {
  return (
    <>
      <h2>Department: {props.employee.department}</h2>
      <Team employee={props.employee} />
    </>
  );
};
