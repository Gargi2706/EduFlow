import React from "react";
import { getUsers, blockUser, unblockUser } from "../../services/userService";
import "../../styles/manageusers.css";
import { useState, useEffect } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

export default function ManageUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleBlock = async (id) => {
    await blockUser(id);
    fetchUsers();
  };

  const handleUnblock = async (id) => {
    await unblockUser(id);
    fetchUsers();
  };

  return (
    <div>
      <DashboardLayout>
        <div className="manage-users">
          <h2>Manage Users</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.role}</td>

                  <td>
                    <td>
                      <span className={user.isBlocked ? "blocked" : "active"}>
                        {user.isBlocked ? "Blocked" : "Active"}
                      </span>
                    </td>
                  </td>

                  <td>
                    <button
                      className={user.isBlocked ? "unblock-btn" : "block-btn"}
                      onClick={() =>
                        user.isBlocked
                          ? handleUnblock(user._id)
                          : handleBlock(user._id)
                      }
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </div>
  );
}
