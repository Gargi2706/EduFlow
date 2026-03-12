const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "Please enter a valid email"]
    },
    password:{
        type : String,
        required : true,
        minlength : [6, "Password must be at least 6 characters long"]
    },
    role: {
        type : String,
        enum : ['Admin', 'Instructor' , 'Student'],
        default : 'Student'
    },
    isBlocked: {
        type : Boolean,
        default : false
    },
}, { timestamps : true });

module.exports = mongoose.model('User', userSchema);    
