import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";
import CreateCourse from "./pages/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";

import EnrollCourse from "./StudentModule/enrollCourse/EnrollCourse";
import StudentDashboard from "./StudentModule/studentDashboard/StudentDashboard";
import MyCourses from "./StudentModule/myCourses/MyCourses";
import MyReviews from "./StudentModule/myReviews/MyReviews";
import CoursePlayer from "./StudentModule/CoursePlayer/CoursePlayer";

import InstructorDashboard from "./pages/Instructor Module/InstructorDashboard";
import AdminDashboard from "./pages/Admin Module/AdminDashboard";
import ManageCourse from "./pages/Instructor Module/ManageCourse";
import EditCourse from "./components/Course/EditCourse/EditCourse";
import Profile from "./pages/Profile";
import DashboardLayout from "./Layout/DashboardLayout";
import StudentsEnrolled from "./pages/Instructor Module/StudentsEnrolled";
import ManageUser from "./pages/Admin Module/ManageUser";
import ManageAllCourses from "./pages/Admin Module/ManageAllCourses";
import ManageReview from "./pages/Admin Module/ManageReview";
import AdminReports from "./pages/Admin Module/AdminReports";
import CourseReview from "./pages/Instructor Module/CourseReview";
import AddLessons from "./components/Course/CourseForm/AddLessons";


// import ManageCourse from "./pages/ManageCourse";
// import EditCourse from "./components/Course/EditCourse/EditCourse";



function App() {
  return (
    <BrowserRouter>
    {/* < InstructorDashboard />
    <CreateCourse /> */}
      <Routes>
          <Route path="/" element ={<Auth />} />
        
       <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
      <Route path="/instructor/create-course" element={<CreateCourse />} />
      <Route path="/instructor/add-lessons/:courseId" element={<AddLessons />} />
      <Route path="/instructor/manage-course" element={<ManageCourse />} />
      <Route path="/instructor/profile" element={<Profile />} />
        <Route path="/instructor/course-review" element={<CourseReview />} />
      <Route path="/instructor/students-enrolled" element={<StudentsEnrolled />} />

 <Route path="/admin-dashboard" element ={<AdminDashboard />} />
      <Route path="/admin-dashboard" element ={<AdminDashboard />} />
      <Route path="/admin/manage-users" element ={<ManageUser />} />
      <Route path="/admin/manage-course" element ={<ManageAllCourses />} />
      <Route path="/admin/manage-reviews" element ={<ManageReview />} />
       <Route path="/admin/reports" element ={<AdminReports/>} />
      
 
 
        {/* <Route path="/" element={<Auth />} />

        <Route path="/" element={<Auth />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />

        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/create-course" element={<CreateCourse />} />

        <Route path="/course-builder" element={<CourseBuilder />} /> */}
        <Route path="/enroll-course" element={<EnrollCourse />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/course-player" element={<CoursePlayer />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;


