import { Link } from "react-router-dom";
import ErrorPng from "../../assets/error.png";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center z-[999] fixed top-0 left-0">
      <div className="w-1/2 h-[400px]">
        <div className="w-full h-full">
          <img
            src={ErrorPng}
            className="w-full h-full object-contain"
            alt="errorpng"
          />
        </div>
      </div>

      <p className="text-gray-800">
        Go back to
        <Link className="text-amber-600 " to="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
