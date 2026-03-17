const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema ({
    course: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
        required : true
    },
    title: String,
    description : String,
    videoUrl : String,
    content : String,
},
    { timestamps : true }
);

module.exports = mongoose.model('Lesson', lessonSchema);