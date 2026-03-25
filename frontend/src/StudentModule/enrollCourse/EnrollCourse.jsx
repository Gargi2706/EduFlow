import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./enrollCourse.css";

export default function EnrollCourse() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEnroll = () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    alert("Enrolled Successfully");
  };

  return (
    <DashboardLayout>

      <div className="enrollPage">

        {/* LEFT CARD */}
        <div className="courseCard">

          <h2>React Basics</h2>

          <p>
            Learn fundamentals of React including components,
            hooks and state.
          </p>

          <div className="ratingRow">
            <span className="stars">⭐⭐⭐⭐☆</span>
            <span className="reviews">(750 reviews)</span>
          </div>

          <div className="levelBadge">
            Beginner Level
          </div>

        </div>


        {/* RIGHT FORM */}
        <div className="enrollForm">

          <h2>Enroll in React Basics</h2>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleEnroll}>
            Enroll Now
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}