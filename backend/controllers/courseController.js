const express = require('express');

exports.createCourse = async (req, res) => {
    try{
        const {title , description  , thumbnail} = req.body

        const course = await Course.create({
            title,
            description,
            instructor,
            thumbnail,
            instructor: req.user.id
        });

        res.status(201).json({
        success : true,
        data : course

    });
    }catch(error){
        res.status(500).json({message : error.message});
}
}

exports.getAllCourse = async (req , res ) =>{
    try{
        const course = await Course.find().populate('instructor' , 'name email');

        res.json({
            success : true,
            count: courses.length,
            data : course
        });     
    }catch(error){
        res.status(500).json({message : error.message});
    }
}