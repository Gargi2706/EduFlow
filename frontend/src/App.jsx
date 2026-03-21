import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";
import CreateCourse from "./pages/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";

import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import ManageCourse from "./pages/ManageCourse";
import EditCourse from "./components/Course/EditCourse/EditCourse";
import Profile from "./pages/Profile";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
    {/* <Profile /> */}
    

      <Routes>
         <Route path="/" element={<DashboardLayout />} />

      <Route path="/instructor/create-course" element={<CreateCourse />} />
      <Route path="/instructor/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
