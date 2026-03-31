import axios from "axios";

export const getDashboardData = async () => {
  const res = await axios.get(

    "http://localhost:3000/api/dashboard/instructor",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return res.data;
};



const API = "http://localhost:000/api/dashboard";

export const getDashboardStats = async (token) => {
  const res = await axios.get(
    `${API}/student/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getMyCourses = async (token) => {
  const res = await axios.get(
    `${API}/student/courses`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};