import { useEmployee } from "../context/EmployeeContext";
import { Team } from "./Team";

export const Department = () => {
  const employee = useEmployee();

  if (!employee) return null;

  return (
    <>
      <h2>Department: {employee.department}</h2>
      <Team />
    </>
  );
};
