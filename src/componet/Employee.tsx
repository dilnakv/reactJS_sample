import { useEmployee } from "../context/EmployeeContext";

export const Employee = () => {
  const employee = useEmployee();

  if (!employee) return null;
  return (
    <>
      <h4>Employee Details:</h4>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
    </>
  );
};
