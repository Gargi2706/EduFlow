import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ added
import "./profileDropdown.css";

function ProfileDropdown() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();   // ✅ added

  // ✅ LOGOUT FUNCTION ADDED
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // redirect to login page
  };

  return (
    <div className="profile-section">

      <div
        className="profile-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="icon-circle">
          👤
        </div>
      </div>

      {menuOpen && (
        <div className="profile-dropdown">

          <div className="profile-header">
            <div className="avatar"></div>
            <div>
              <div className="name">Student</div>
              <div className="email">student@gmail.com</div>
              <div className="role">Student</div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="menu-item">My Profile</div>

          <div
            className="menu-item"
            onClick={() => navigate("/profile/change-password")}
          >
            Change Password
          </div>

          <div className="menu-item">Settings</div>

          <div className="divider"></div>

          {/* ✅ LOGOUT CLICK ADDED */}
          <div className="menu-item logout" onClick={handleLogout}>
            Logout
          </div>

        </div>
      )}

    </div>
  );
}

export default ProfileDropdown;