import React from 'react'
import CourseRow from './CourseRow'

export default function CourseTable({courses , refresh}) {
  return (
    <div>
      <table className="course-table">

      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Students</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((course) => (
          <CourseRow
            key={course._id}
            course={course}
            refresh={refresh}
          />
        ))}
      </tbody>

    </table>
    </div>
  )
}
