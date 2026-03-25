import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


export default function EnrollmentChart({data}) {
  return (
  <div style={{ flex: 1, background: "#fff", padding: "20px", borderRadius: "12px" }}>
      <h3>Enrollments</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="enrollments" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
