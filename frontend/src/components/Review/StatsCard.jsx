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
        <h3>Average Rating</h3>
        <h1>{stats.avgRating}</h1>
      </div>

      <div className="card">
        <h3>Total Reviews</h3>
        <h1>{stats.totalReviews}</h1>
      </div>
    </div>
  )
}
