import type { EmployeeData } from "../App";

type EmployeeProps = {
  employee: EmployeeData;
};
export const Employee = ({ employee }: EmployeeProps) => {
  return (
    <>
      <h4>Employee Details:</h4>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
    </>
  );
};
