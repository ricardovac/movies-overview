import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AccountContext } from "./AccountContext";

const UseAuth = () => {
  const { user } = useContext(AccountContext);
  return user && user.LoggedIn;
};

// Prevent user to access home page without logIn
const PrivateRoutes = () => {
  const isAuth = UseAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
