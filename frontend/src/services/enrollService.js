import axios from "axios";

const API = "http://localhost:3000/api/enrollment";

export const enrollCourse = async (data, token) => {

  const res = await axios.post(
    `${API}/enroll/`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};