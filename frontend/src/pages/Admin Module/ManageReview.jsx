import React from "react";
import {
  getReview,
  approveReview,
  rejectReview,
  deleteReview,
} from "../../services/reviewService";
import { useState, useEffect } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import '../../styles/managereviews.css'

export default function ManageReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getReview();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await approveReview(id);
      fetchReviews();
    } catch (error) {
      console.error("Approve error:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectReview(id);
      fetchReviews();
    } catch (error) {
      console.error("Reject error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      fetchReviews();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="manage-reviews-page">
        <h2>Manage Reviews</h2>

        <table className="reviews-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
                <td>{review.student?.name}</td>
        

                <td>{review.course?.title}</td>
              

                <td className="rating">{review.rating}</td>

                <td>{review.comment}</td>
               

                <td>{review.status}</td>
         

                <td>
                  {review.status === "Pending" && (
                    <>
                      <button
                        className="action-btn approve-btn"
                        onClick={() => handleApprove(review._id)}
                      >
                        Approve
                      </button>

                      <button
                        className="action-btn reject-btn"
                        onClick={() => handleReject(review._id)}
                      >
                        Reject
                      </button>
                    </>
                  )}

                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Gargi</td>
                <td>React Course</td>
                 <td >3</td>
                 <td>veryuseful</td>
                 <td>pending</td>
                 <button className="action-btn approve-btn">approve</button>
                 <button className="action-btn reject-btn">reject</button>
                 <button className="action-btn delete-btn">delete</button>
                 </tr>
                 <tr>
              <td>Gargi</td>
                <td>React Course</td>
                 <td >3</td>
                 <td>veryuseful</td>
                 <td>Complete</td>
                 <button className="action-btn approve-btn">approve</button>
                 <button className="action-btn reject-btn">reject</button>
                 <button className="action-btn delete-btn">delete</button>
                 </tr> */}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
