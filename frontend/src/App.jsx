import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage"; 
import Auth from "./pages/AuthPage/Auth";
import CreateCourse from "./pages/Instructor Module/CreateCourse";


import EnrollCourse from "./StudentModule/enrollCourse/EnrollCourse";
import StudentDashboard from "./StudentModule/studentDashboard/StudentDashboard";
import MyCourses from "./StudentModule/myCourses/MyCourses";
import MyReviews from "./StudentModule/myReviews/MyReviews";
import CoursePlayer from "./StudentModule/CoursePlayer/CoursePlayer";
import CourseCatalog from "./StudentModule/courseCatalog/CourseCatalog";

import InstructorDashboard from "./pages/Instructor Module/InstructorDashboard";
import AdminDashboard from "./pages/Admin Module/AdminDashboard";
import ManageCourse from "./pages/Instructor Module/ManageCourse";
import EditCourse from "./components/Course/EditCourse/EditCourse";

import DashboardLayout from "./Layout/DashboardLayout";
import StudentsEnrolled from "./pages/Instructor Module/StudentsEnrolled";
import ManageUser from "./pages/Admin Module/ManageUser";
import ManageAllCourses from "./pages/Admin Module/ManageAllCourses";
import ManageReview from "./pages/Admin Module/ManageReview";
// import AdminReports from "./pages/Admin Module/AdminReports";
import CourseReview from "./pages/Instructor Module/CourseReview";
import AddLessons from "./components/Course/CourseForm/AddLessons";


// import ManageCourse from "./pages/ManageCourse";
// import EditCourse from "./components/Course/EditCourse/EditCourse";


import ProfileDropdown from "./pages/Profile/profileDropdown/ProfileDropdown";
import ChangePassword from "./pages/Profile/ChangePassword/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";


function App() {
  return (
    <BrowserRouter>
    {/* < InstructorDashboard />
    <CreateCourse /> */}
      <Routes>
          {/* <Route path="/" element ={<Auth />} /> */}
          
        <Route path="/" element={<LandingPage />} />
         <Route path="/auth" element={<Auth />} />

       <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
      <Route path="/instructor/create-course" element={<CreateCourse />} />
      <Route path="/instructor/add-lessons/:courseId" element={<AddLessons />} />
      <Route path="/instructor/manage-course" element={<ManageCourse />} />
    
        <Route path="/instructor/course-review" element={<CourseReview />} />
      <Route path="/instructor/students-enrolled" element={<StudentsEnrolled />} />

      <Route path="/admin-dashboard" element ={<AdminDashboard />} />
      <Route path="/admin-dashboard" element ={<AdminDashboard />} />
      <Route path="/admin/manage-users" element ={<ManageUser />} />
      <Route path="/admin/manage-course" element ={<ManageAllCourses />} />
      <Route path="/admin/manage-reviews" element ={<ManageReview />} />
      {/* <Route path="/admin/reports" element ={<AdminReports/>} /> */}
      
 
 
        

        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> */}
        <Route path="/profile/change-password" element={<ChangePassword />} />
        <Route path="/profile/profile-dropdown" element={<ProfileDropdown />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        


       <Route path="/student-dashboard" element={<StudentDashboard />} />
       <Route path="/enroll/:courseId" element={<EnrollCourse />} />
        <Route path="/student/my-courses" element={<MyCourses />} />
        <Route path="/student/my-reviews" element={<MyReviews />} />
        <Route path="/student/course-player" element={<CoursePlayer />} />
        <Route path="/student/course-catalog" element={<CourseCatalog />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;


