import axios from "axios";

const API = "http://localhost:5000/api/enrollment";

// ✅ ENROLL COURSE
export const enrollCourse = async (courseId, name, email, token) => {
  const res = await axios.post(
    `${API}/enroll/${courseId}`,
    { name, email },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


// ✅ GET MY ENROLLED COURSES
export const getMyCourses = async (token) => {
  const res = await axios.get(
    `${API}/my-courses`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


// ✅ UPDATE PROGRESS (optional but useful)
export const updateProgress = async (id, progress, token) => {
  const res = await axios.put(
    `${API}/progress/${id}`,
    { progress },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};