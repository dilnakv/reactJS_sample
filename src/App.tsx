import "./App.css";
import { Counter } from "./componet/Counter/Counter";
import { Department } from "./componet/Department";
import { Greeting } from "./componet/Greeting";
import ProductList from "./componet/ProductList";
import { UserProfile } from "./componet/UserProfile/UserProfile";

export type EmployeeData = {
  id: number;
  name: string;
  position: string;
  department: string;
  team: string;
};

function App() {
  const empData: EmployeeData = {
    id: 101,
    name: "Dilna K Vasavan",
    position: "Software Developer",
    department: "IT",
    team: "Mobile App",
  };
  return (
    <>
      {/* <Greeting name={"Dilna"} /> */}
      {/* <h2>Product List</h2>
      <ProductList/> */}
      {/* <h2>Company Data</h2>
      <Department employee={empData} /> */}
      <Counter />
      <UserProfile/>
    </>
  );
}

export default App;
