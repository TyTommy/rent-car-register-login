import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/index";
import Login from "../routes/auth/login/Login";
import Dashboard from "../routes/dashboard/Dashboard";

const App: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return <div>{token ? <Dashboard /> : <Login />}</div>;
};

export default App;
