import { useContext } from "react";
import { AuthUser } from "../../App";
import { Outlet, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const AuthLayout = () => {
  const user = useContext(AuthUser);

  if (!user.logged) {
    return <Navigate to="/" replace={false} />;
  }

  return <div className="w-full">
    <Outlet />
  </div>;
};

AuthLayout.propTypes = {
  children: PropTypes.node
}

export default AuthLayout;
