import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";
import CreateCourse from "./pages/Instructor Module/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";

import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import ManageCourse from "./pages/Instructor Module/ManageCourse";
import EditCourse from "./components/Course/EditCourse/EditCourse";
import Profile from "./pages/Profile";
import DashboardLayout from "./Layout/DashboardLayout";
import StudentsEnrolled from "./pages/Instructor Module/StudentsEnrolled";

function App() {
  return (
    <BrowserRouter>
    {/* <Profile /> */}
    
{/* <InstructorDashboard/> */}

{/* <StudentDashboard /> */}
      <Routes>
        <Route path="/" element ={<DashboardLayout />} />

      <Route path="/instructor/create-course" element={<CreateCourse />} />
      <Route path="/instructor/manage-course" element={<ManageCourse />} />
      <Route path="/instructor/profile" element={<Profile />} />
      <Route path="/instructor/students-enrolled" element={<StudentsEnrolled />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
