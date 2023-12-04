import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "../../App";

const AuthLayout = () => {
  const user = useContext(AuthUser);
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default AuthLayout;
