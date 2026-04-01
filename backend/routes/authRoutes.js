const express = require ('express');
const router = express.Router();
const { registerUser , loginUser , getProfile , updateProfile , changePassword , updateSettings , logoutUser,
  forgotPassword , resetPassword , getCurrentUser
} = require('../controllers/authController');
const verifyToken = require("../middleware/verifyToken");

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user
  });
});


router.post('/register' , registerUser);
router.post('/login' , loginUser);

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);

router.put("/change-password", verifyToken, changePassword);
router.put("/settings", verifyToken, updateSettings);

router.post("/logout", verifyToken, logoutUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/me", verifyToken, getCurrentUser);

module.exports = router;