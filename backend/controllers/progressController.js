const User = require("../models/User");

// PUT /progress/video
exports.updateVideoProgress = async (req, res) => {
  try {
    const userId = req.user.id; // from protect middleware
    const { lessonId, currentTime } = req.body; // currentTime in seconds

    if (!lessonId || currentTime == null) {
      return res.status(400).json({ message: "Lesson ID and current time required" });
    }

    const user = await User.findById(userId);

    // Check if progress for this lesson already exists
    const progressIndex = user.videoProgress.findIndex(
      (p) => p.lesson.toString() === lessonId
    );

    if (progressIndex > -1) {
      // Update existing
      user.videoProgress[progressIndex].currentTime = currentTime;
    } else {
      // Add new
      user.videoProgress.push({ lesson: lessonId, currentTime });
    }

    await user.save();

    res.status(200).json({
      message: "Video progress updated",
      videoProgress: user.videoProgress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};