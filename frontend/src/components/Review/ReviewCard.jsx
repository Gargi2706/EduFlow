import React from 'react'

export default function ReviewCard({review}) {
  return (
    <div>
       <div className="review-card">
      <h4>{review.studentName}</h4>
      <p>{review.course?.title}</p>

      <p>⭐ {review.rating}</p>
      <p>{review.comment}</p>

      <button>Reply</button>
    </div>
    </div>
  )
}
