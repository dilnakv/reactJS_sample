import type { EmployeeData } from "../App";
import { Employee } from "./Employee";

type TeamProps = {
  employee: EmployeeData;
};
export const Team = (props: TeamProps) => {
  return (
    <>
      <h3>Team : {props.employee.team}</h3>
      <Employee employee={props.employee} />
    </>
  );
};
