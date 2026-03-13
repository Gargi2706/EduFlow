const express = require ('express');
const router = express.Router();
const { registerUser , loginUser } = require('../controllers/authController');
const verifyToken = require("../middleware/verifyToken");

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user
  });
});


router.post('/register' , registerUser);
router.post('/login' , loginUser);

module.exports = router;
console.log("Auth routes loaded");