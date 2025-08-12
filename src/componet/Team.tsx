import type { EmployeeData } from "../App";
import { Employee } from "./Employee";

type TeamProps = {
  employee: EmployeeData;
};
export const Team = ({ employee }: TeamProps) => {
  return (
    <>
      <h3>Team : {employee.team}</h3>
      <Employee employee={employee} />
    </>
  );
};
