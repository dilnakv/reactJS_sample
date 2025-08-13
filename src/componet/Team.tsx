import { useEmployee } from "../context/EmployeeContext";
import { Employee } from "./Employee";

export const Team = () => {
  const employee = useEmployee();

  if (!employee) return null;
  return (
    <>
      <h3>Team : {employee.team}</h3>
      <Employee />
    </>
  );
};
