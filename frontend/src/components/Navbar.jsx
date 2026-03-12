import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>EduFlow</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/courseDetails">Course Details</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        

      </div>
    </nav>
  );
}

export default Navbar;