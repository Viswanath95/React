import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import Support from "./Pages/Support";
import Team from "./Pages/Team";
import ErrorPage from "./ErrorPage.js/ErrorPage";
import './App.css';

export const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/dashboard", element: <Dashboard />,
      children: [
        { path: "home", element: <Home /> },
        { path: "reports", element: <Reports /> },
        { path: "products", element: <Products /> },
        { path: "team", element: <Team /> },
        { path: "messages", element: <Messages /> },
        { path: "support", element: <Support /> },
      ],
    },
    { path: "/", element: <Login />},
    { path: "*", element: <ErrorPage />},
  ]);
  return routes;
};

const App = () => {
  return(
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
