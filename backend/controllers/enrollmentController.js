const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const User = require("../models/User");


exports.enrollCourse = async (req,res)=>{
 try{

 // ✅ Allow only students
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

 // ✅ Prevent duplicate enrollment
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


// Get enrolled courses
exports.getEnrolledCourses = async (req, res) => {

    try {

        const courses = await Enrollment
            .find({ Student: req.user._id })
            .populate("course");

        res.json({
            success: true,
            count: course.length,
            data: course,
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