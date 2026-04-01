const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");

// ✅ ENROLL COURSE
exports.enrollCourse = async (req, res) => {
  try {
    console.log("USER:", req.user);

    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    if (req.user.role !== "Student" && req.user.role !== "student") {
      return res.status(403).json({
        message: "Only students can enroll"
      });
    }

    const courseId = req.params.courseId;
    const { name, email } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    const alreadyEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId
    });

    if (alreadyEnrolled) {
      return res.status(400).json({
        message: "Already enrolled"
      });
    }

    const enrollment = await Enrollment.create({
      student: req.user.id,
      course: courseId,
      name,
      email
    });

    res.json({
      success: true,
      data: enrollment,
      message: "Enrolled successfully"
    });

  } catch (err) {
    console.error("ENROLL ERROR:", err);
    res.status(500).json({
      message: err.message
    });
  }
};


// ✅ ADD THIS (missing earlier)
exports.getEnrolledCourses = async (req, res) => {
  try {
    const courses = await Enrollment
      .find({ student: req.user.id })
      .populate("course");

    res.json({
      success: true,
      data: courses
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ ADD THIS (missing earlier)
exports.updateProgress = async (req, res) => {
  try {
    const { progress } = req.body;

    const updated = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { progress },
      { new: true }
    );

    res.json({
      success: true,
      data: updated
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ ADD THIS (missing earlier → main cause of crash)
exports.getEnrollmentsByCourse = async (req, res) => {
  try {
    const enrollments = await Enrollment
      .find({ course: req.params.courseId })
      .populate("student");

    res.json({
      success: true,
      data: enrollments
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};