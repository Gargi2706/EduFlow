const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const User = require("../models/User");


exports.enrollCourse = async (req,res)=>{
 try{

 if(req.user.role !== "Student"){
  return res.status(403).json({
   success:false,
   message:"Only students can enroll in courses"
  });
 }

 const course = await Course.findById(req.params.courseId);

 if(!course){
  return res.status(404).json({
   message:"Course not found"
  });
 }

 const alreadyEnrolled = await Enrollment.findOne({
   student: req.user.id,
   course: req.params.courseId
 });

 if(alreadyEnrolled){
  return res.status(400).json({
   message:"You are already enrolled in this course"
  });
 }

 const enrollment = await Enrollment.create({
   student: req.user.id,
   course: req.params.courseId
 });

 res.json({
  success:true,
  data:enrollment,
  message:"Enrolled successfully"
 });

 }catch(err){
  res.status(500).json({message:err.message});
 }
}




    exports.getEnrolledCourses = async (req, res) => {

        try {

        const enrollments = await Enrollment
            .find({ student: req.user.id })
            .populate("course");

        res.status(200).json({
            success: true,
            data: enrollments,
            message: "Enrolled courses retrieved successfully"
        });

        } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};


// Update progress
exports.updateProgress = async (req, res) => {

    try {

        const enrollment = await Enrollment.findByIdAndUpdate(
            req.params.id,
            { progress: req.body.progress },
            { new: true }
        );

        res.json(enrollment);

    } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
}

};

//check enrolled students for a course - for instructor dashboard
exports.getEnrollmentsByCourse = async (req, res) => {
  try {

    const { courseId } = req.params;
    const userId = req.user.id;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    if (course.instructor.toString() !== userId) {
      return res.status(403).json({
        message: "You are not allowed to view this course enrollments"
      });
    }

    const enrollments = await Enrollment.find({ course: courseId })
      .populate("student", "name email");

    const totalStudents = enrollments.length;

    res.status(200).json({
      success: true,
      totalStudents,
      data: enrollments
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
