import "./landingPage.css";
import { useNavigate } from "react-router-dom";

import thumbnailImg from "../../assets/thumbnail.jpg";

export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="landing">


      {/* NAVBAR */}

      <div className="navbar-home">

        <div className="navhome-container">

          <div className="logo">
            EduFlow
          </div>

          <div className="navhome-buttons">

          </div>

        </div>

      </div>



      {/* HERO */}

      <div className="hero">

        <div className="hero-box">

          <h1>Welcome to EduFlow</h1>

          <p>
            Learn anytime, track progress,
            grow your skills online.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() =>
                navigate("/auth", {
                  state: { tab: "login" }
                })
              }
            >
              Login
            </button>

            <button
              onClick={() =>
                navigate("/auth", {
                  state: { tab: "register" }
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

            <span
              className="view"
              onClick={() =>
                navigate("/auth", {
                  state: { tab: "login" }
                })
              }
            >
              View All →
            </span>

          </div>


          <div className="course-list">

            <div className="course-card">
              <img src={thumbnailImg} />
              <h4>React Basics</h4>
            </div>

            <div className="course-card">
              <img src={thumbnailImg} />
              <h4>Node.js Fundamentals</h4>
            </div>

            <div className="course-card">
              <img src={thumbnailImg} />
              <h4>MongoDB Essentials</h4>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
}