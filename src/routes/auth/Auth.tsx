import { Outlet, useLocation } from "react-router-dom";
import Login from "./login/Login";

const Auth = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/auth";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-[450px] w-full p-12">
        {isRootPath ? <Login /> : <Outlet />}
      </div>
    </div>
  );
};

export default Auth;
