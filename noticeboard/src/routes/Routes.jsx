import { Route, Routes } from "react-router-dom";
import { Home } from "../components/landingpage/Home";
import { Login } from "../components/login/Login";
import { Private } from "./PrivateRoute";


export const Router = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Private><Home /></Private>} />
        </Routes>
    
    </>
  );
};
