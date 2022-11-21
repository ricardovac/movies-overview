import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UseAuth = () => {
  const user = { LoggedIn: false };
  return user && user.LoggedIn;
};

// Prevent user to access home page without logIn
const PrivateRoutes = () => {
  const isAuth = UseAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
