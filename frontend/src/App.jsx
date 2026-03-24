// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Auth from "./pages/AuthPage/Auth";
// import CreateCourse from "./pages/CreateCourse";
// import CourseBuilder from "./pages/CourseBuilder";

// import EnrollCourse from "./StudentModule/EnrollCourse/EnrollCourse";
// import StudentDashboard from "./StudentModule/studentDashboard/StudentDashboard";

// import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
// import AdminDashboard from "./pages/adminDashboard/AdminDashboard";

// import ManageCourse from "./pages/ManageCourse";
// import EditCourse from "./components/Course/EditCourse/EditCourse";

// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Auth />} />

//         <Route path="/student-dashboard" element={<StudentDashboard />} />

//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//         <Route path="/instructor-dashboard" element={<InstructorDashboard />} />

//         <Route path="/profile" element={<Profile />} />

//         <Route path="/create-course" element={<CreateCourse />} />

//         <Route path="/course-builder" element={<CourseBuilder />} />

//         {/* ✅ IMPORTANT */}
//         <Route path="/enroll-course/:id" element={<EnrollCourse />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";
import EnrollCourse from "./StudentModule/EnrollCourse/EnrollCourse";
import StudentDashboard from "./StudentModule/studentDashboard/StudentDashboard";
import Profile from "./pages/Profile";

import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Auth />} />

        {/* DASHBOARD LAYOUT */}
        <Route element={<DashboardLayout />}>

          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/enroll-course" element={<EnrollCourse />} />
          <Route path="/profile" element={<Profile />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;