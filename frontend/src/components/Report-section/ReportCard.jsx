import React from 'react'

export default function ReportCard({title , value  , icon}) {
  return (
    <div className="report-card">
  <div className="card-icon">{icon}</div>

  <div className="card-content">
    <h2>{value}</h2>
    <p>{title}</p>
  </div>
</div>
  )
}
