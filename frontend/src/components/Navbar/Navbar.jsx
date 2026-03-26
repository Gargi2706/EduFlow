import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

import logoImg from "../../assets/logo.png";

function Navbar({ setOpen, open }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          onClick={() => setOpen(!open)}
          src={logoImg}
          alt="EduFlow Logo"
          className="logo-image"
        />
        <span>EduFlow</span>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
         
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
        </ul>


        {/* PROFILE */}
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

              {/* header */}
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

              <div className="menu-item">Change Password</div>

              <div className="menu-item">Settings</div>

              <div className="divider"></div>

              <div className="menu-item logout">
                Logout
              </div>

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;