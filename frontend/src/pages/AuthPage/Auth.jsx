import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  {
    /*useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/student-dashboard");
    }
  }, [navigate]);*/
  }

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        if (data.role === "Student") {
          navigate("/student-dashboard");
        } else if (data.role === "Instructor") {
          navigate("/instructor-dashboard");
        } else if (data.role === "Admin") {
          navigate("/admin-dashboard");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server not reachable");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registered successfully");

      setEmail("");
      setPassword("");
      setName("");
      setRole("");

      setIsLogin(true);
    } catch (err) {
      console.error(err);
      alert("Server not reachable");
    }
  };

  return (
    <div className="page-center">
      <div className="auth-container">
        {/* LEFT */}
        <div className="auth-left">
          <img
            src="frontend/public/logo.png" 
            alt="EduFlow Logo"
            className="logo"
          />
          <h1>EduFlow</h1>
          <p>Welcome to EduFlow, biggest platform for learning!</p>
        </div>

        {/* RIGHT */}
        <div className="auth-right">
          {isLogin ? (
            <>
              <h2>Welcome Back</h2>

              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button className="auth-btn" onClick={handleLogin}>
                Login
              </button>

              <p className="auth-text">
                Don’t have an account?{" "}
                <span className="auth-link" onClick={() => setIsLogin(false)}>
                  Register Now
                </span>
              </p>
            </>
          ) : (
            <>
              <h2>Create Account</h2>

              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <select onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </select>

              <button className="auth-btn" onClick={handleRegister}>
                Register
              </button>

              <p className="auth-text">
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
