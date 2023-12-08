import { useContext } from "react";
import { AuthUser } from "../../App";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayouth = () => {
  const user = useContext(AuthUser);

  if (!user.logged) {
    return <Navigate to="/" replace={false} />;
  }
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
  // AuthLayouth.propTypes = {
  //   chilldren: propTypes.node,
  // };
};

export default AuthLayouth;
