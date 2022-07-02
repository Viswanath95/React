import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import SchemeCreation from "./SchemeInitiation/SchemeCreation";
import UserTable from "./UserManagement/UserTable";
//import UserForm from "./UserManagement/UserForm";
import Home from "./Pages/Home";
import HomeOne from "./Pages/HomeOne";
import HomeTwo from "./Pages/HomeTwo";
import HomeThree from "./Pages/HomeThree";
import HomeFour from "./Pages/HomeFour";
import Messages from "./Pages/Messages";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import Support from "./Pages/Support";
import Team from "./Pages/Team";
import ErrorPage from "./ErrorPage/ErrorPage";
import "./App.css";

export const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "schemepage", element: <SchemeCreation />},
        { path: "usertable", element: <UserTable />},

        {
          path: "home",
          element: <Home />,
          children: [
            { path: "homeone", element: <HomeOne /> },
            { path: "hometwo", element: <HomeTwo /> },
            { path: "homethree", element: <HomeThree /> },
            { path: "homefour", element: <HomeFour /> },
          ],
        },
        { path: "reports", element: <Reports /> },
        { path: "products", element: <Products /> },
        { path: "team", element: <Team /> },
        { path: "messages", element: <Messages /> },
        { path: "support", element: <Support /> },
      ],
    },
    { path: "/", element: <Login /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
