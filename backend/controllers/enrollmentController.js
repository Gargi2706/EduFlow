const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const User = require("../models/User");

exports.enrollCourse = async (req,res)=>{
 try{

 const course = await Course.findById(req.params.courseId)

 if(!course){
  return res.status(404).json({
   message:"Course not found"
  })
 }

 const enrollment = await Enrollment.create({
   student:req.User.id,
   course:req.params.courseId

 })

 res.json({
  success:true,
    data:enrollment,    
    message:"Enrolled successfully"
 })

 }catch(err){
  res.status(500).json({message:err.message})
 }
}


// Get enrolled courses
exports.getEnrolledCourses = async (req, res) => {

    try {

        const courses = await Enrollment
            .find({ student: req.user._id })
            .populate("course");

        res.json(courses);

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