import { NavLink } from "react-router-dom";
import "./navbar.css";

import logoImg from "../../assets/logo.png";
import ProfileDropdown from "../../pages/Profile/profileDropdown/ProfileDropdown";

function Navbar({ setOpen, open }) {

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

        {/* PROFILE COMPONENT */}
        <ProfileDropdown />

      </div>

    </nav>
  );
}

export default Navbar;