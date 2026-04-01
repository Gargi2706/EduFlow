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

// ✅ GET MY COURSES
export const getMyCourses = async (token) => {
  const res = await axios.get(`${API}/my-courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// ✅ UPDATE PROGRESS
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

// ✅ SUBMIT REVIEW
export const submitReview = async (courseId, rating, comment, token) => {
  const res = await axios.post(
    "http://localhost:5000/api/reviews",
    { courseId, rating, comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ✅ GET COURSE REVIEWS
export const getCourseReviews = async (courseId, token) => {
  const res = await axios.get(
    `http://localhost:5000/api/reviews/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};