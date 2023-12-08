import { useContext } from "react";
import { AuthUser } from "../../App";

const HomeDashboard = () => {
  const user = useContext(AuthUser);
  return (
    <div className="flex flexcol">
      <h1 className="text-3xl text-gray-100">
        {user?.logged ? "logged in" : null}
      </h1>
    </div>
  );
};

export default HomeDashboard;
