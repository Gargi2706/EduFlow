import DashboardLayout from "../../../Layout/DashboardLayout";
import "./changePassword.css";

export default function ChangePassword() {
  return (
    <DashboardLayout>

      <div className="change-password-page">

        <h2 className="title">
          Change Password
        </h2>


        <div className="password-card">

          <label>
            Current Password
          </label>

          <input
            type="password"
            placeholder="Enter current password"
          />


          <label>
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
          />


          <label>
            Confirm New Password
          </label>

          <input
            type="password"
            placeholder="Confirm new password"
          />


          <button className="update-btn">
            Update Password
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}