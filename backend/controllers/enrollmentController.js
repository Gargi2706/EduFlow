    const Enrollment = require("../models/Enrollment");
    const Course = require("../models/Course");


    // Enroll in course
    exports.enrollCourse = async (req, res) => {
            console.log("Enroll API hit");
        try {

            const enrollment = await Enrollment.create({
                student: req.user._id,
                course: req.body.courseId
            });

            res.status(201).json(enrollment);

        } catch (error) {
            res.status(500).json({ message: "Server error" });
        }

    };


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