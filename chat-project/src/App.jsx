import { Routes, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import PublicRoutes from "./utils/PrivateRoutes";
import "./App.css";
function App() {
  
  return (
    <Routes>
      <Route element={<PublicRoutes></PublicRoutes>}>
        {" "}
        <Route index element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Route>

      <Route element={<ProtectedRoutes></ProtectedRoutes>}>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
