import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";

import Navbar from "./components/Navbar/Navbar";
import CourseCard from "./components/Course/CourseCard/coursecard";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateCourse from "./pages/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";  

import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";




function App() {
  return (

    <BrowserRouter>
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

    <CreateCourse />
    

{/* <CourseBuilder /> */}



      <Routes>

        {/* Default Page */}
        <Route path="/" element={<Auth />} />

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Home */}
        <Route path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
            </>
          }
        />

        {/* Course Details */}
        <Route
          path="/course/:id"
          element={
            <>
              <Navbar />
              <CourseDetails />
            </>
          }
        /> */

      </Routes>
    </BrowserRouter>
  );
}

export default App;