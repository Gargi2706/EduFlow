import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/AuthPage/Auth";

import Navbar from "./components/Navbar/Navbar";
import CourseCard from "./components/Course/CourseCard/coursecard";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateCourse from "./pages/CreateCourse";
import CourseBuilder from "./pages/CourseBuilder";  

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


        {/* <Route path="/" element={<Auth />} />  */}
        {/* <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
            </>
          }
        />

        <Route
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