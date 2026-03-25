import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";
import CreateCourse from "./pages/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";

import EnrollCourse from "./StudentModule/enrollCourse/EnrollCourse";
import StudentDashboard from "./StudentModule/studentDashboard/StudentDashboard";
import MyCourses from "./StudentModule/myCourses/MyCourses";
import MyReviews from "./StudentModule/myReviews/MyReviews";
import CoursePlayer from "./StudentModule/CoursePlayer/CoursePlayer";

import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";

// import ManageCourse from "./pages/ManageCourse";
// import EditCourse from "./components/Course/EditCourse/EditCourse";

import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

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


