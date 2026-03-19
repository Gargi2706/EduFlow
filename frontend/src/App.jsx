import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

import Navbar from "./components/Navbar";

import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Page */}
        <Route path="/" element={<Auth />} />

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />

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
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;