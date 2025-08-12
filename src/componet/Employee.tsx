import type { EmployeeData } from "../App";

type EmployeeProps = {
  employee: EmployeeData;
};
export const Employee = (props: EmployeeProps) => {
  return (
    <>
      <h4>Employee Details:</h4>
      <p>ID: {props.employee.id}</p>
      <p>Name: {props.employee.name}</p>
      <p>Position: {props.employee.position}</p>
    </>
  );
};
