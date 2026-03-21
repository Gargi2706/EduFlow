import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/AuthPage/Auth";
// import CreateCourse from "./pages/CreateCourse";
// import CourseBuilder from "./pages/CourseBuilder";

// import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
 import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
// import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
// import ManageCourse from "./pages/ManageCourse";
// import EditCourse from "./components/Course/EditCourse/EditCourse";
import Profile from "./pages/Profile";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
=======
    {/* <Profile /> */}
    

>>>>>>> b3abe412cd8aa0f0809c45a97e1b398092f2e819
      <Routes>
         <Route path="/" element={<DashboardLayout />} />

<<<<<<< HEAD
        <Route path="/" element={<Profile/>} />

        {/* <Route path="/student-dashboard" element={<StudentDashboard />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />  */}
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> 

        
        {/* <Route path="/create-course" element={<CreateCourse />} />  */}

=======
      <Route path="/instructor/create-course" element={<CreateCourse />} />
      <Route path="/instructor/profile" element={<Profile />} />
>>>>>>> b3abe412cd8aa0f0809c45a97e1b398092f2e819
      </Routes>
    </BrowserRouter>
  );
}

export default App;
