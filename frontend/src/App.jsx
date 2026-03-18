import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Auth from "./pages/Auth";
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import CourseDetails from "./pages/CourseDetails";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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