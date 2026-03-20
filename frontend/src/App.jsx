import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/AuthPage/Auth";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import CreateCourse from "./pages/CreateCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Auth />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* ✅ IMPORTANT */}
        <Route path="/create-course" element={<CreateCourse />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;