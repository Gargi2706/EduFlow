const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    thumbnail: String,

    studentsEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
    level: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },

    status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },

    
  },
  
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
