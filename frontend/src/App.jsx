import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeList from "./pages/EmployeeList";
import AIRecommendation from "./pages/AIRecommendation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-employee" element={<EmployeeForm />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/recommendations" element={<AIRecommendation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;