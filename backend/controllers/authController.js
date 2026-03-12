const User = require('../models/User');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req , res) =>{
    const {name , email , password , role } = req.body

    try {
        // if user already exists
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message : "User already exists"});     
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password , 10);    
         
        // Create new user
        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            role
        });
        
        if(user){
            res.status(201).json({
                _id : user._id,
                name : user.name,
                email : user.email,
                role : user.role,
                token : generateToken(user)
            });
        } else {
            res.status(400).json({message : "Invalid user data"});
        }    
    } catch (error) {
        res.status(500).json({message : "Server error"});      
    }
}