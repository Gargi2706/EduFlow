import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./coursePlayer.css";

export default function CoursePlayer() {
  return (
    <DashboardLayout>

      <div className="playerPage">

        {/* LEFT SIDEBAR */}

        <div className="lessonSidebar">

          <h3>Lessons</h3>

          <ul>

            <li className="active">Introduction</li>
            <li>Components</li>
            <li>Hooks</li>
            <li>State & Props</li>
            <li>Project</li>

          </ul>

        </div>



        {/* RIGHT CONTENT */}

        <div className="lessonContent">

          <h2>Introduction to React</h2>

          <div className="videoBox">

            ▶ Video Player

          </div>

          <h3>Introduction to React</h3>

          <p>
            In this lesson you will learn what is React
            and why it is used.
          </p>

          <button className="nextBtn">
            Next Lesson →
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}