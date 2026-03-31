const express = require("express");
const router = express.Router();
const { authorizeRoles} = require("../middleware/roleMiddleware");

const {
    getAdminDashboard ,
    getAllUsers,
    getAllCourses,
    getAllEnrollments,
    blockUser,
    unblockUser, 
    getAdminReports} = require("../controllers/adminController");

const verifyToken = require("../middleware/verifyToken");

router.get("/dashboard", verifyToken,  getAdminDashboard);
router.get("/users", verifyToken,  getAllUsers);
router.get("/courses", verifyToken,  getAllCourses);
router.get("/enrollments", verifyToken,  getAllEnrollments);
router.put("/users/:id/block", verifyToken,  blockUser);
router.put("/users/:id/unblock", verifyToken,  unblockUser);
router.get("/reports" , verifyToken ,  getAdminReports)

module.exports = router;    
