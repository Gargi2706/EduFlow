import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function UserGrowthChart({data}) {
  return (
    <div style={{ flex: 1, background: "#fff", padding: "20px", borderRadius: "12px" }}>
      <h3>User Growth</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
