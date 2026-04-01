import "./landingPage.css";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import logo from "../../assets/logo.png";
import axios from "axios";

export default function LandingPage() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

 const fetchCourses = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/courses/");
    
    console.log(res.data);

    setCourses(res.data?.data || []);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="landing">
      {/* NAVBAR */}

      <div className="navbar-home">
        <div className="navhome-container">
          <div className="home-logo">
            <img src={logo} alt="logo" />
            EduFlow
          </div>

          <div className="navhome-buttons">
            <span>Home</span>
            {/* <span>Courses</span>
  <span>About</span>
  <span onClick={()=>navigate("/auth",{state:{tab:"login"}})}>Login</span>
  <span onClick={()=>navigate("/auth",{state:{tab:"register"}})}>Register</span> */}
          </div>
        </div>
      </div>

      {/* HERO */}

      <div className="hero">
        <div className="hero-box">
          <h1>Welcome to EduFlow</h1>

          <p>Learn anytime, track progress, grow your skills online.</p>

          <div className="hero-buttons">
            <button
              onClick={() =>
                navigate("/auth", {
                  state: { tab: "login" },
                })
              }
            >
              Login
            </button>

            <button
              onClick={() =>
                navigate("/auth", {
                  state: { tab: "register" },
                })
              }
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* COURSES */}

      <div className="courses">
        <div className="course-container">
          <div className="course-header">
            <h2>Courses</h2>

            {/* <span
              className="view"
              onClick={() =>
                navigate("/auth", {
                  state: { tab: "login" },
                })
              }
            >
              View All →
            </span> */}
          </div>

          <div className="course-list">
            {courses.map((course) => (
              <div className="course-card" key={course._id}>
                <img
                  src={course.thumbnail || "/default.jpg"}
                  alt={course.title}
                />
                <h3>{course.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
