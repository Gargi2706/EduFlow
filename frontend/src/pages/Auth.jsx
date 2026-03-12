import { useState } from "react";
import "../styles/auth.css";

function Auth() {

  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-left">

          <div className="tabs">

            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>

            <button
              className={activeTab === "register" ? "active" : ""}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>

          </div>

          {activeTab === "login" && (
            <div className="form">
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
              <button className="btn btn-primary w-100">Login</button>
            </div>
          )}

          {activeTab === "register" && (
            <div className="form">
              <input type="text" placeholder="Name" className="form-control mb-3" />
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />

              <div class="mb-3">
                <select class="form-select" id="selectOption" name="option">
                    <option selected>Select Role</option>
                    <option>Student</option>
                    <option>Instructor</option>
                    <option>Admin</option>
                </select>
                </div>


              <button className="btn btn-primary w-100">Register</button>
            </div>
          )}

        </div>

        <div className="auth-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="education"
          />
        </div>

      </div>

    </div>
  );
}

export default Auth;