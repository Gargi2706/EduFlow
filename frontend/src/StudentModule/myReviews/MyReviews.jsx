import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./myReviews.css";

export default function MyReviews() {
  return (
    <DashboardLayout>

      <div className="reviewsPage">

        <h1 className="pageTitle">My Reviews</h1>


        {/* Card 1 */}
        <div className="reviewCard">

          <h2>React Basics</h2>

          <div className="stars">
            ⭐⭐⭐☆☆
          </div>

          <textarea
            placeholder="Write your review..."
          />

          <button>Submit Review</button>

        </div>



        {/* Card 2 */}
        <div className="reviewCard">

          <h2>Node.js</h2>

          <div className="stars">
            ⭐⭐⭐⭐☆
          </div>

          <textarea
            placeholder="Write your review..."
          />

          <button>Submit Review</button>

        </div>


      </div>

    </DashboardLayout>
  );
}