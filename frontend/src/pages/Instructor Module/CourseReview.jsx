import React from 'react'
import API from '../../services/api'
import { useEffect , useState } from 'react'
import ReviewCard from '../../components/Review/ReviewCard'
import StatsCard from '../../components/Review/StatsCard'
import '../../styles/courseReview.css'
import DashboardLayout from '../../Layout/DashboardLayout'

export default function CourseReview() {
      const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.get("/reviews").then((res) => setReviews(res.data));
  }, []);

  return (
    <DashboardLayout >
    <div className="container">
      <h2>Course Reviews</h2>

      <StatsCard />

      <div className="review-list">
        {reviews.map((r) => (
          <ReviewCard key={r._id} review={r} />
        ))}
      </div>
    </div>
    </DashboardLayout>
  )
}
