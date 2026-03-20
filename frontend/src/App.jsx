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

function App() {
  return (
    <BrowserRouter>
    {/* <Profile /> */}

    <ManageCourse />
      {/* <InstructorDashboard /> */}
      {/* <Sidebar role="Instructor" />
    <Auth />
    <Navbar />
    <CourseCard
      course={{
        title: "Web Development",
        instructor: "Justin Lee",
        image: "/images/web.jpg"
      }}
    />
    <CourseCard
      course={{
        title: "Web Development",
        instructor: "Justin Lee",
        image: "/images/web.jpg"
      }}
    /> */}

      {/* <CreateCourse /> */}

      {/* <CourseBuilder /> */}

      <Routes>

        {/* <Route
          path="/instructor/manage-courses"
          element={<ManageCourses />}
        /> */}

        {/* Edit course page */}
        {/* <Route
          path="/instructor/edit-course/:id"
          element={<EditCourse />}
        /> */}

        {/* Default Page */}
        {/* <Route path="/" element={<Auth />} /> */}

        {/* Student Dashboard */}
        {/* <Route path="/student-dashboard" element={<StudentDashboard />} />
        
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}

        {/* Home */}
        {/* <Route path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        /> */}

        {/* Courses */}
        {/* <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
            </>
          }
        /> */}

        {/* Course Details */}
        {/* <Route
          path="/course/:id"
          element={
            <>
              <Navbar />
              <CourseDetails />
            </>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
