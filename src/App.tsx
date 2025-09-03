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
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./componet/Navbar";
import { NoMatch } from "./componet/NoMatch";
import { ProductCard } from "./componet/ProductCard";
import { Product } from "./componet/Product";
import ProductReview from "./componet/ProductReview";
import { ProductDetail } from "./componet/ProductDetail";
import SignupForm from "./componet/Signup";
import { MuiCheckbox } from "./componet/MuiCheckbox";
import { MuiSwitch } from "./componet/MuiSwitch";
import { MuiRating } from "./componet/MuiRating";
import { MuiLayout } from "./componet/MuiLayout";
import { MuiCard } from "./componet/MuiCard";
import { MuiAccordian } from "./componet/MuiAccordian";
import { MuiImageList } from "./componet/MuiImageList";
import { MuiNavbar } from "./componet/MuiNavbar";
import { MuiTable } from "./componet/MuiTable";
import { MuiAlert } from "./componet/MuiAlert";
import { MuiSnackbar } from "./componet/MuiSnackbar";
import { MuiDateTimePicker } from "./componet/MuiDateTimePicker";
import MuiTabsExample from "./componet/MuiTabs";
import MuiTabs from "./componet/MuiTabs";
import { MuiDialog } from "./componet/MuiDialog";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import { MuiResponsiveness } from "./componet/MuiResponsiveness";

export type EmployeeData = {
  id: number;
  name: string;
  position: string;
  department: string;
  team: string;
};

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.lime[500],
    },
    neutral: {
      main: colors.grey[500],
    }
  },
});

function App() {
  const empData: EmployeeData = {
    id: 101,
    name: "Dilna K Vasavan",
    position: "Software Developer",
    department: "IT",
    team: "Mobile App",
  };
  return (
    // <>
    //   {/* <Greeting name={"Dilna"} />
    //   <h2>Product List</h2>
    //   <ProductList />
    //   <h2>Company Data</h2>
    //   <Department />
    //   <Counter />
    //   <UserProfile /> */}
    //   {/* <ProductListApi /> */}
    //   {/* <CurrentTime /> */}
    //   {/* <Login /> */}
    //   {/* <ProductCart/> */}
    //   {/* <ProductListUseCallback/> */}
    //   {/* <ForwardRefInput/> */}
    //   {/* <CrudExample/> */}
    //   {/* <AuthProvider>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="dashboard" element={<ProductListApi />} />
    //       <Route path="technician" element={<TechnicianPage />} />
    //       <Route path="chat" element={<Chat />} />
    //       <Route path="*" element={<NoMatch />} />
    //       <Route path="/products/:id" element={<Product />}>
    //         <Route index element={<ProductDetail />} />
    //         <Route path="details" element={<ProductDetail />} />
    //         <Route path="reviews" element={<ProductReview />} />
    //       </Route>
    //     </Routes>
    //   </AuthProvider> */}
    //   {/* <SignupForm/> */}
    //   {/* <MuiCheckbox/> */}
    //   {/* <MuiSwitch/> */}
    //   {/* <MuiRating/> */}
    //   {/* <MuiLayout/> */}
    //   {/* <MuiCard/> */}
    //   {/* <MuiAccordian/> */}
    //   {/* <MuiImageList/> */}
    //   {/* <MuiNavbar/> */}
    //   {/* <MuiTable/> */}
    //   {/* <MuiAlert/> */}
    //   {/* <MuiSnackbar/> */}
    //   {/* <MuiDateTimePicker/> */}
    //   {/* <MuiTabs/> */}
    //   {/* <MuiDialog/> */}
    //   {/* {<MuiResponsiveness/>} */}
    // </>
    <ThemeProvider theme={theme}>
      <MuiResponsiveness/>
    </ThemeProvider>
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
