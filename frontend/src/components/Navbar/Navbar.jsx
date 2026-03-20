import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import logoImg from "../../assets/logo.png";

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

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Login
            </NavLink>
        
        </ul>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
