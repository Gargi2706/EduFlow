import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
       
      <div className="logo">EduFlow</div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
     
    </nav>
  );
}

export default Navbar;
