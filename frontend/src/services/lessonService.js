import axios from "axios";

export const addLesson = async (courseId, formData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(
    `http://localhost:5000/api/courses/${courseId}/lessons/`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};