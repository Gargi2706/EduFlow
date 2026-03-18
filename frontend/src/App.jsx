import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import CourseDetails from "./pages/CourseDetails";

import Navbar from "./components/Navbar/Navbar";
import CourseCard from "./components/CourseCard/coursecard";

function App() {
  return (

    <BrowserRouter>
    {/* <Auth /> */}
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
    />






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