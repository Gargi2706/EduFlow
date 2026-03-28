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