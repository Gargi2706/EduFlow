

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   console.log("Decoded token:", decoded); // DEBUG

    req.user = decoded; 

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;



// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.protect = async (req, res, next) => {
//   try {

//     let token;

//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//     }

//     if (!token) {
//       return res.status(401).json({
//         message: "No token provided"
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(decoded.id).select("-password");

//     req.user = user;

//     next();

//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ message: "Invalid token" });
//   }
// };