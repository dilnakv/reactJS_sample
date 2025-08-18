import { createContext } from "react";
import "./App.css";
import { Counter } from "./componet/Counter/Counter";
import { CurrentTime } from "./componet/CurrentTime";
import { Department } from "./componet/Department";
import { Greeting } from "./componet/Greeting";
import { Login } from "./componet/Login";
import ProductCart from "./componet/ProductCart";
import ProductList from "./componet/ProductList";
import { ProductListApi } from "./componet/ProductListApi";
import { UserProfile } from "./componet/UserProfile/UserProfile";
import { EmployeeContext } from "./context/EmployeeContext";
import { Chat } from "./componet/Chat";
import { UserContext } from "./context/UserContext";
import ProductListUseCallback from "./componet/ProductListUseCallback";
import { ForwardRefInput } from "./componet/ForwardRefInput";
import TechnicianPage from "./componet/Technician";
import { AuthProvider } from "./context/AuthContext";

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
      {/* <Greeting name={"Dilna"} />
      <h2>Product List</h2>
      <ProductList />
      <h2>Company Data</h2>
      <Department />
      <Counter />
      <UserProfile /> */}
      {/* <ProductListApi /> */}
      {/* <FormComponent/> */}
      {/* <CurrentTime /> */}
      {/* <Login /> */}
      {/* <ProductCart/> */}
      {/* <ProductListUseCallback/> */}
      {/* <ForwardRefInput/> */}
      {/* <CrudExample/> */}
      <AuthProvider>
        <TechnicianPage/>
      </AuthProvider>
      
    </>

    // <EmployeeContext.Provider value={empData}>
    //   <h2>Company Data</h2>
    //   <Department />
    // </EmployeeContext.Provider>
    //    <UserContext.Provider value={{ username: "Dilna" }}>
    //   <Chat />
    // </UserContext.Provider>
  );
}

export default App;
