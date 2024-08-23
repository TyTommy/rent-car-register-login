import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Details from "../components/details/Details";
import Dashboard from "./dashboard/Dashboard";
import Create from "./dashboard/create/Create";
import Auth from "./auth/Auth";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />,
    },

    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/cars/:id",
      element: <Details />,
    },
  ]);
};

export default RouteController;
