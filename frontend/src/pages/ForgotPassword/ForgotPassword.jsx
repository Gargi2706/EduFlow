import "./forgotPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="forgot-container">

      <div className="forgot-card">

        <h2 className="title">Forgot Password?</h2>

        <p className="subtitle">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <button className="reset-btn">
          Send Reset Link
        </button>

        <p
          className="back-link"
          onClick={() => navigate("/auth")}
        >
          Back to Login
        </p>

      </div>

    </div>
  );
}