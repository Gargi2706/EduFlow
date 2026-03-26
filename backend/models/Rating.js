const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    user: { type: String }, // userId or email
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String }
});

module.exports = mongoose.model("Rating", ratingSchema);