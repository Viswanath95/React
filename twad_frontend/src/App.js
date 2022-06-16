import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Dashboard>
      <Routes>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/reports" element={<Reports />} />
        <Route path="/dashboard/support" element={<Support/>} />
        <Route path="/dashboard/team" element={<Team />} />
        <Route path="*" element={<ErrorPage />} />
        <Route />
      </Routes>
      </Dashboard>
    </Router>
  );
}

export default App;