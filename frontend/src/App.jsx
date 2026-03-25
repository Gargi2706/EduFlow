import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/AuthPage/Auth";
import CreateCourse from "./pages/Instructor Module/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";
import EnrollCourse from "./StudentModule/EnrollCourse/EnrollCourse";
import StudentDashboard from "./StudentModule/studentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import ManageCourse from "./pages/Instructor Module/ManageCourse";
import EditCourse from "./components/Course/EditCourse/EditCourse";
import Profile from "./pages/Profile";
import DashboardLayout from "./Layout/DashboardLayout";
import StudentsEnrolled from "./pages/Instructor Module/StudentsEnrolled";
import ManageUser from "./pages/Admin Module/ManageUser";
import ManageAllCourses from "./pages/Admin Module/ManageAllCourses";
import ManageReview from "./pages/Admin Module/ManageReview";
import AdminReports from "./pages/Admin Module/AdminReports";

function App() {
  return (
    <BrowserRouter>
      {/* <Profile /> */}
      {/* < ManageAllCourses />
      <ManageUser /> */}
      {/* <InstructorDashboard/> */}

      {/* <StudentDashboard /> */}
      <Routes>
          <Route path="/" element ={<DashboardLayout />} />
        <Route path="/admin-dashboard" element ={<AdminDashboard />} />

      <Route path="/instructor/create-course" element={<CreateCourse />} />
      <Route path="/instructor/manage-course" element={<ManageCourse />} />
      <Route path="/instructor/profile" element={<Profile />} />
      <Route path="/instructor/students-enrolled" element={<StudentsEnrolled />} />

      <Route path="/admin/manage-users" element ={<ManageUser />} />
      <Route path="/admin/manage-course" element ={<ManageAllCourses />} />
      <Route path="/admin/manage-reviews" element ={<ManageReview />} />
       <Route path="/admin/reports" element ={<AdminReports/>} />
      
 
 
        {/* <Route path="/" element={<Auth />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/course-builder" element={<CourseBuilder />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/enroll-course" element={<EnrollCourse />} /> */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
