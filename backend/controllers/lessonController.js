const Lesson = require("../models/Lesson");
const Course = require("../models/Course");
const User = require("../models/User")

exports.createLesson = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, videoUrl, content } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
const video = req.files.video?.[0]?.path || "";
    const pdf = req.files.pdf?.[0]?.path || "";

    const lesson = await Lesson.create({
      course: courseId,
      title,
      description,
      videoUrl,
      pdf,
      content,
    });

    res.status(201).json({
      success: true,
      data: lesson,
      message: "Lesson created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getLessonsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const lessons = await Lesson.find({ course: courseId });

    res.json({
      success: true,
      count: lessons.length,
      data: lessons,
      message: "Lessons retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getLessonById = async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const lesson = await Lesson.findOne({ _id: lessonId, course: courseId });
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json({
      success: true,
      data: lesson,
      message: "Lesson retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;
    const { title, description, videoUrl, content } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    let lesson = await Lesson.findOne({ _id: lessonId, course: courseId });
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    lesson.title = title || lesson.title;
    lesson.description = description || lesson.description;
    lesson.videoUrl = videoUrl || lesson.videoUrl;
    lesson.pdf = pdf || lesson.pdf;
    lesson.content = content || lesson.content;

    await lesson.save();

    res.json({
      success: true,
      data: lesson,
      message: "Lesson updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.deleteLesson = async (req, res) => {
    try {
        const { courseId , lessonId } = req.params;

        const course = await Course.findByIdAndDelete(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const lesson = await Lesson.findOneAndDelete({ _id: lessonId, course: courseId });
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }

        res.json({
            success: true,
            message: "Lesson deleted successfully",
        });     
    }catch(error){
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
} 


exports.markLessonComplete = async (req, res) => {
  try {
    const userId = req.user.id; // from protect middleware
    const lessonId = req.params.id;

    // Fetch lesson
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    // Update user's completed lessons
    const user = await User.findById(userId);
    if (!user.completedLessons.includes(lessonId)) {
      user.completedLessons.push(lessonId);
      await user.save();
    }

    res.status(200).json({
      message: "Lesson marked as complete",
      completedLessons: user.completedLessons,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};