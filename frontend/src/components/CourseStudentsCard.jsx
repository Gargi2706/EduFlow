import React from 'react'

export default function CourseStudentsCard(course) {
  return (
    <div>
      <div className="courseCard">

<div className="courseHeader">

<div>

<h3>{course.courseName}</h3>

<p>
{course.students.length} Students Enrolled
</p>

</div>

</div>

<div className="studentsList">

{course.students.map((student,index)=>(

<div className="studentRow" key={index}>

<div className="studentInfo">

<div className="avatar"></div>

<div>

<h4>{student.name}</h4>
<p>{student.email}</p>

</div>

</div>

<div className="studentRight">

<span className="joinDate">

● Joined {student.date}

</span>


</div>

</div>

))}

</div>

</div>
    </div>
  )
}
