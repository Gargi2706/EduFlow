import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./myReviews.css";
import {
  getMyCourses,
  submitReview,
  getCourseReviews
} from "../../services/enrollService";

export default function MyReviews() {

  const [courses, setCourses] = useState([]);
  const [reviews, setReviews] = useState({});
  const [existingReviews, setExistingReviews] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await getMyCourses(token);

        const formatted = res.data.map((item) => ({
          _id: item.course._id,
          title: item.course.title,
        }));

        setCourses(formatted);

        // ✅ FETCH EXISTING REVIEWS
        const reviewsData = {};

        for (let item of res.data) {
          const reviewRes = await getCourseReviews(item.course._id, token);
          reviewsData[item.course._id] = reviewRes.data;
        }

        setExistingReviews(reviewsData);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (courseId, field, value) => {
    setReviews((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (courseId) => {
    try {
      const token = localStorage.getItem("token");

      const rating = reviews[courseId]?.rating || 1;
      const comment = reviews[courseId]?.comment || "";

      await submitReview(courseId, rating, comment, token);

      // ✅ REFRESH REVIEWS AFTER SUBMIT
      const reviewRes = await getCourseReviews(courseId, token);

      setExistingReviews((prev) => ({
        ...prev,
        [courseId]: reviewRes.data,
      }));

      alert("Review submitted!");

    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Error submitting review");
    }
  };

  return (
    <DashboardLayout>

      <div className="reviewsPage">

        <h1 className="pageTitle">My Reviews</h1>

        {courses.map((course) => (
          <div className="reviewCard" key={course._id}>

            <h2>{course.title}</h2>

            <div className="stars">
              <select
                onChange={(e) =>
                  handleChange(course._id, "rating", Number(e.target.value))
                }
              >
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

            <textarea
              placeholder="Write your review..."
              onChange={(e) =>
                handleChange(course._id, "comment", e.target.value)
              }
            />

            <button onClick={() => handleSubmit(course._id)}>
              Submit Review
            </button>

            {/* ✅ SHOW EXISTING REVIEWS */}
            {existingReviews[course._id]?.map((rev) => (
              <div key={rev._id} className="existingReview">
                <p>⭐ {rev.rating}</p>
                <p>{rev.comment}</p>
              </div>
            ))}

          </div>
        ))}

      </div>

    </DashboardLayout>
  );
}