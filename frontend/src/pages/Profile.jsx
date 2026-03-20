import React, { useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import DashboardLayout from "../Layout/DashboardLayout";
import '../styles/profile.css'

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Later you will fetch from backend
    const data = {
      name: "Gargi Patel",
      email: "gargi@email.com",
      phone: "9876543210",
      expertise: "Web Development",
      bio: "Instructor for React and Node courses",
      image: "https://via.placeholder.com/150",
    };

    setUser(data);
  }, []);

  return (
    <div>
    <DashboardLayout />
    <div className="profile-page">
      

      <h2>Instructor Profile</h2>

      <ProfileCard user={user} />
    </div>
    </div>
  );
}
