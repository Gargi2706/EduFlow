import React from "react";
import "./profile.css";

export default function ProfileCard({ user }) {

  return (
    <div className="main-content">
    <div className="profile-card">

      <img src={user.image} alt="profile" className="profile-img" />

      <h3>{user.name}</h3>

      <p><b>Email:</b> {user.email}</p>



      <p><b>Expertise:</b> {user.expertise}</p>

   

      <button className="edit-btn">
        Edit Profile
      </button>

    </div>
    </div>
    
  );
}