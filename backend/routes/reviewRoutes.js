const express = require("express");
const router = express.Router();
const {authorizeRoles} = require("../middleware/roleMiddleware");

const {
  addReview,
  getCourseReviews,
  getAllReviews,
  approveReview,
  rejectReview,
  deleteReview
} = require("../controllers/reviewController");

const verifyToken = require("../middleware/verifyToken");


router.post("/", verifyToken, authorizeRoles("Student"), addReview);


router.get("/:courseId", verifyToken ,  getCourseReviews);
router.get("/review" , verifyToken , getAllReviews)
router.put("/approve/:id", verifyToken, approveReview);
router.put("/reject/:id",verifyToken,  rejectReview);
router.delete("/:id",verifyToken , deleteReview);


module.exports = router;