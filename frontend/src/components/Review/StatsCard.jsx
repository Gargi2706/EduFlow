import React from 'react'
import API from '../../services/api';
import { useEffect , useState } from 'react';

export default function StatsCard() {
     const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/reviews/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="stats">
      <div className="card">
        <h4>Average Rating</h4>
        <h1>{stats.avgRating}</h1>
      </div>

      <div className="card">
        <h4>Total Reviews</h4>
        <h1>{stats.totalReviews}</h1>
      </div>
    </div>
  )
}
